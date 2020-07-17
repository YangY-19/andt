import React, {
  FC,
  ChangeEvent,
  useState,
  useEffect,
  ReactElement,
} from "react";
import Input, { InputProps } from "../Input/input";
import Icon from "../Icon/Icon";
import useDebounce from "../../hooks/useDebounce";
import classnames from "classnames";
interface DataSourceObject {
  value: string;
}
export type DataSourceType<T = {}> = T & DataSourceObject;

interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
  fetchSuggestions: (
    keyword: string
  ) => DataSourceType[] | Promise<DataSourceType[]>;
  //点击item
  onSelect?: (value: DataSourceType) => void;
  //自定义模板
  renderOption?: (item: DataSourceType) => ReactElement;
}
const AutoComponent: FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    value,
    renderOption,
    ...resultProps
  } = props;

  const [inputValue, setInputValue] = useState(value as string);
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(1);
  const debouncedValue = useDebounce(inputValue, 500);
  //设置输入框里的值
  useEffect(() => {
    if (debouncedValue) {
      const results = fetchSuggestions(debouncedValue);
      if (results instanceof Promise) {
        results.then((data) => {
          setLoading(false);
          setSuggestions(data);
        });
      } else {
        setSuggestions(results);
      }
    } else {
      setLoading(false);
      setSuggestions([]);
    }
  }, [debouncedValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const value = e.target.value.trim();
    setInputValue(value);
  };

  //自定义模板
  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  };

  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value);
  };

  //键盘事件
  const highlight = (index: number) => {
    if (index < 0) {
      setHighlightIndex(suggestions.length - 1);
    } else if (index > suggestions.length - 1) {
      setHighlightIndex(0);
    } else {
      setHighlightIndex(index);
    }
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.keyCode) {
      case 13:
        if (suggestions[highlightIndex]) {
          handleSelect(suggestions[highlightIndex]);
        }
        break;
      case 38:
        highlight(highlightIndex - 1);
        break;
      case 40:
        highlight(highlightIndex + 1);
        break;
      case 27:
        setSuggestions([]);
        break;
      default:
        break;
    }
  };

  const generateDropdown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          const classes = classnames("suggestion-item", {
            "is-active": highlightIndex === index,
          });
          return (
            <li className={classes} onClick={() => handleSelect(item)}>
              {" "}
              {renderTemplate(item)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="viking-auto-complete">
      <Input
        inputType="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...resultProps}
      />
      {loading && (
        <ul>
          <Icon style={{ color: "#ccc" }} icon="spinner" spin></Icon>
        </ul>
      )}
      {suggestions.length > 0 && generateDropdown()}
    </div>
  );
};

export default AutoComponent;

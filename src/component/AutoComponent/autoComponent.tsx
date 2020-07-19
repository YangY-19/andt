import React, {
  FC,
  ChangeEvent,
  useState,
  useEffect,
  ReactElement,
  useRef,
  Fragment,
} from "react";
import Input, { InputProps } from "../Input/input";
import Icon from "../Icon/Icon";
import useDebounce from "../../hooks/useDebounce";
import useClickOutside from "../../hooks/useClickOutside"
import classNames from "classnames";
import Transition from '../Transition/transition'
import { IconProps } from "../Icon/Icon";

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
  icon?: IconProps
}
const AutoComponent: FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    value,
    renderOption,
    icon,
    ...resultProps
  } = props;

  const [inputValue, setInputValue] = useState(value as string);
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState(false);
  const [ showDropdown, setShowDropdown] = useState(false)
  const [highlightIndex, setHighlightIndex] = useState(1);
  const componentRef = useRef<HTMLDivElement>(null)
  const debouncedValue = useDebounce(inputValue, 500);
  const triggerSearch = useRef(false)
  useClickOutside(componentRef, () => { setSuggestions([]) })
  //设置输入框里的值
  useEffect(() => {
    if (debouncedValue && triggerSearch.current) {
      const results = fetchSuggestions(debouncedValue);
      if (results instanceof Promise) {
        setLoading(true);
        results.then((data) => {
          setLoading(false);
          setSuggestions(data);
          if (data.length > 0) {
            setShowDropdown(true)
          }
        });
      } else {
        setSuggestions(results);
        setShowDropdown(true)
        if (results.length > 0) {
          setShowDropdown(true)
        } 
      }
    } else {
      setShowDropdown(false);
    }
  }, [debouncedValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (!value) {
        setLoading(false);
    }
    setInputValue(value);
    triggerSearch.current = true
  };

  //自定义模板
  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  };

  const handleSelect = (item: DataSourceType) => {
    setShowDropdown(false)
    setInputValue(item.value);
    triggerSearch.current = false
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
        setShowDropdown(false);
        break;
      default:
        break;
    }
  };

  const generateDropdown = () => {
      console.log(loading)
    return (
        <Transition
        in={showDropdown || loading}
        animation="zoom-in-top"
        timeout={300}
        onExited={() => {setSuggestions([])}}
      >
        <ul className="viking-suggestion-list">
          { loading &&
            <div className="suggstions-loading-icon">
              <Icon icon="spinner" spin/>
            </div>
         }
         {
            suggestions.map((item, index) => {
                const cnames = classNames('suggestion-list-item', {
                  'is-active': index === highlightIndex
                })
                return (
                  <div className={cnames}>
                        { icon && icon }
                        <li key={index} onClick={() => handleSelect(item)}>
                            {renderTemplate(item)}
                        </li>
                  </div>
                )
              })
        }
        </ul>
      </Transition>
    );
  };

  return (
    <div className="viking-auto-complete" ref={componentRef}>
      <Input
        inputType="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...resultProps}
      />
      { generateDropdown()}
    </div>
  );
};

export default AutoComponent;

import React, {
  FC,
  ReactElement,
  useState,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  ChangeEvent,
} from "react";
import Icon from "../Icon/Icon";
import classNames from "classnames";

type InputSize = "lg" | "sm";
type inputAndTextarea = "input" | "textarea";
type inputType = "password" | "text" | "number";
interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size">,
    TextareaHTMLAttributes<HTMLElement> {
  /**Input类型 Input Textarea */
  type?: inputAndTextarea;
  inputType?: inputType;
  /**是否禁用 Input */
  disabled?: boolean;
  /**设置 input 大小，支持 lg 或者是 sm */
  size?: InputSize;
  /**添加前缀 用于配置一些固定组合 */
  prepend?: string | ReactElement;
  /**添加后缀 用于配置一些固定组合 */
  append?: string | ReactElement;
  /**添加图标，在右侧悬浮添加一个图标，用于提示 */
  lastIcon?: string | ReactElement;
  firstIcon?: string | ReactElement;
  /**密码框*/
  passwordIcon?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = (props) => {
  const {
    type,
    disabled,
    inputType,
    size,
    prepend,
    append,
    lastIcon,
    firstIcon,
    passwordIcon,
    onChange,
    ...resultProps
  } = props;

  const [hasFocus, setHasFocus] = useState(false);
  const [passIcon, setPassIcon] = useState(true);

  const controlledValue = (value: any) => {
    if (value == null) {
      return "";
    }
    return props.value;
  };
  if ("value" in props) {
    delete resultProps.defaultValue;
    resultProps.value = controlledValue(resultProps.value);
  }
  const inputFocus = () => {
    setHasFocus(true);
  };

  const inputBlur = () => {
    setHasFocus(false);
  };

  //密码框
  const passwordInput = () => {
    if (passIcon) {
      return <Icon icon="lock"></Icon>;
    }
    return <Icon icon="unlock"></Icon>;
  };

  //切换密码框
  const handlePassIcon = () => {
    setPassIcon(!passIcon);
  };

  const classes = classNames("viking-input-wrapper", {
    [`input-size-${size}`]: size,
    "is-disabled": disabled,
    "input-group": prepend || append,
    "input-group-append": !!append,
    "input-group-prepend": !!prepend,
  });

  const inputClass = classNames("viking-input-group-icon", {
    "input-group-icon-border": hasFocus,
    "is-disabled": disabled,
    "viking-input-group-password-icon": passwordIcon,
  });

  const inputRender = () => {
    return type === "input" ? (
      <input
        type={passwordIcon ? (passIcon ? "password" : "text") : inputType}
        className="viking-input-inner"
        disabled={disabled}
        onFocus={inputFocus}
        onBlur={inputBlur}
        onChange={onChange}
        {...resultProps}
      />
    ) : (
      <textarea className="viking-textarea-inner" {...resultProps} />
    );
  };

  return (
    <div className={classes}>
      {prepend && <div className="viking-input-group-prepend">{prepend}</div>}
      {lastIcon || firstIcon ? (
        <div className={inputClass}>
          {firstIcon && firstIcon}
          {inputRender()}
          {lastIcon && lastIcon}
        </div>
      ) : passwordIcon ? (
        <div className={inputClass}>
          {inputRender()}
          {<span onClick={handlePassIcon}>{passwordInput()}</span>}
        </div>
      ) : (
        inputRender()
      )}
      {append && <div className="viking-input-group-append">{append}</div>}
    </div>
  );
};

Input.defaultProps = {
  type: "input",
  inputType: "text",
};
export default Input;

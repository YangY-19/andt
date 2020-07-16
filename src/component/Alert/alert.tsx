import React, { FC, ReactElement, useState } from "react";
import classNames from "classnames";
import Icon from "../Icon/Icon";
import Transition from "../Transition/transition";

export type AlertType =
  | "chinoiserie"
  | "success"
  | "info"
  | "warning"
  | "error";

interface AlertProps {
  message: string; //标题
  description?: string; //类容
  className?: string;
  type?: AlertType;
  closable?: boolean; //是否显示关闭按钮
  closeText?: ReactElement | string; //自定义关闭按钮
  delay?:number;
  onClose?: () => void;
}

export const Alert: FC<AlertProps> = (props) => {
  const {
    message,
    description,
    className,
    type,
    closeText,
    closable,
    delay = 3000,
    onClose,
  } = props;
  const [show, setShow] = useState(false);
  const classes = classNames("alert", className, {
    [`alert-${type}`]: type,
    // hide: show,
  });

  if (!closable) {
    setTimeout(() => {
      setShow(true);
    }, delay)
  }

  const typeIcon = (): ReactElement => {
    if (type === "success") {
      return (
        <i style={{ padding: "0 4px" }}>
          <Icon icon="check-circle"></Icon>
        </i>
      );
    } else if (type === "info") {
      return (
        <i style={{ padding: "0 4px" }}>
          <Icon icon="question-circle"></Icon>
        </i>
      );
    } else if (type === "warning") {
      return (
        <i style={{ padding: "0 4px" }}>
          <Icon icon="minus-circle"></Icon>
        </i>
      );
    } else if (type === "error") {
      return (
        <i style={{ padding: "0 4px" }}>
          <Icon icon="times-circle"></Icon>
        </i>
      );
    } else {
      return <span></span>;
    }
  };

  const handleClose = () => {
    setShow(true);
    onClose && onClose();
  };

  return (
    <Transition in={!show} timeout={300} animation="zoom-in-top">
        <div className={classes}>
          <div className="messages">
            <p>
              {typeIcon()}
              {message}
            </p>
            {closable && (
              <p className="closeText" onClick={handleClose}>
                {closeText ? closeText : <Icon icon="times" theme="white" />}
              </p>
            )}
          </div>
          {description && <div className="description">{description}</div>}
        </div>
    </Transition>
  );
};

Alert.defaultProps = {
  type: "chinoiserie",
  closable: false
};

export default Alert;

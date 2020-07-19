import React, { FC } from "react";
import classNames from "classnames";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

export type TheneProps =
  | "chinoiserie"
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "light"
  | "dark"
  | "white"
  | "black"
export interface IconProps extends FontAwesomeIconProps {
  theme?: TheneProps;
}

export const Icon: FC<IconProps> = (props) => {
  const { className, theme, ...resultProps } = props;
  const classes = classNames("andt-icon", className, {
    [`icon-${theme}`]: theme,
  });
  return <FontAwesomeIcon className={classes} {...resultProps} />;
};

Icon.defaultProps = {
  theme: "chinoiserie",
};

export default Icon;

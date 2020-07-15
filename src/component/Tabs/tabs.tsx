import React, { FC, Children, FunctionComponentElement, useState } from "react";
import classNames from "classnames";
import { TabItemProps } from "./tabItem";

export type sizeType = "lg" | "default" | "sm";
export type tabItemType = "chinoiserie" | "line" | "card";
interface TabsProps {
  defaultActiveKey?: string;
  type?: tabItemType;
  size?: sizeType;
  className?: string;
  disabled?: boolean;
  onChange?: () => void;
  onTabClick?: (e: any) => void;
}

export const Tabs: FC<TabsProps> = (props) => {
  const {
    // defaultActiveKey,
    type,
    // size,
    className,
    children,
    disabled,
    onTabClick,
  } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const renderChildren = () => {
    return Children.map(children, (child, index) => {
      if (activeIndex === index) {
        return child;
      }
    });
  };

  const setIndex = (e: any, index: number) => {
    debugger;
    e.preventDefault();
    setActiveIndex(index);
  };

  const renderNavLinks = () => {
    return Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<TabItemProps>;
      const {
        type: { displayName },
        props: { tab, addIcon },
      } = childElement;
      if (displayName === "TabItem") {
        var classes = classNames("andt-tabs-nav-item", {
          "is-active": activeIndex === index,
          disabled: disabled,
          card: type === "card",
        });
        if (addIcon) {
          return (
            <div className="icon-nav">
              <li
                className={classes}
                key={index}
                onClick={(e) => {
                  setIndex(e, index);
                  onTabClick && onTabClick(e);
                }}
              >
                {addIcon} {tab}
              </li>
            </div>
          );
        }
        return (
          <li
            className={classes}
            key={index}
            onClick={(e) => {
              setIndex(e, index);
              onTabClick && onTabClick(e);
            }}
          >
            {tab}
          </li>
        );
      }
    });
  };

  const classes = classNames("andt-tabs-nav", className, {
    "nav-line": type === "line",
    "nav-card": type === "card",
    "nav-chinoiserie": type === "chinoiserie",
  });

  return (
    <div className="andt-tabs">
      <ul className={classes}>{renderNavLinks()}</ul>
      <div>{renderChildren()}</div>
    </div>
  );
};

Tabs.defaultProps = {
  type: "chinoiserie",
};

export default Tabs;

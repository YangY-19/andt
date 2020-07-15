import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./button";
import Icon from "../Icon/Icon";

const defaultButton = () => (
  <div style={{ marginTop: 30 }}>
    <Button onClick={action("clicked")}> 默认样式 </Button>
    <Button
      className="m-100"
      icon={<Icon theme="white" icon="coffee"></Icon>}
      onClick={action("clicked")}
    >
      默认样式
    </Button>
  </div>
);

const buttonWithSize = () => (
  <div style={{ marginTop: 30 }}>
    <Button size="lg"> 大按钮 </Button>
    <Button className="m-100"> 中按钮 </Button>
    <Button className="m-100" size="sm">
      {" "}
      小按钮{" "}
    </Button>
  </div>
);

const buttonWithType = () => (
  <div style={{ marginTop: 30 }}>
    <Button className="m-100" btnType="chinoiserie">
      {" "}
      中国风按钮{" "}
    </Button>
    <Button className="m-100" btnType="primary">
      {" "}
      基本按钮
    </Button>
    <Button className="m-100" btnType="default">
      {" "}
      默认按钮{" "}
    </Button>
    <Button className="m-100" btnType="danger">
      {" "}
      危险按钮{" "}
    </Button>
    <Button className="m-100" btnType="link" href="https://google.com">
      链接按钮
    </Button>
  </div>
);
storiesOf("按钮组件", module)
  .add("按钮", defaultButton)
  .add("不同尺寸的 按钮", buttonWithSize)
  .add("不同类型的 按钮", buttonWithType);

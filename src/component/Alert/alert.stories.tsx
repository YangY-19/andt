import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";

import Alert from "./alert";
// import Icon from "../Icon/Icon";

const defaultMenu = () => (
  <>
    <Alert message="提示信息!"></Alert>
  </>
);

const briefnessMenu = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      height: 300,
      justifyContent: "space-around",
    }}
  >
    <Alert type="success" message="提示信息!"></Alert>
    <Alert type="info" message="提示信息!"></Alert>
    <Alert type="warning" message="提示信息!"></Alert>
    <Alert type="error" message="提示信息!"></Alert>
  </div>
);

// const buttonWithType = () => (
//   <>
//     <Button btnType="primary"> primary button </Button>
//     <Button btnType="danger"> danger button </Button>
//     <Button btnType="link" href="https://google.com"> link button </Button>
//   </>
// )
storiesOf("Alert组件", module)
  .add("默认Alert", defaultMenu)
  .add("多样式标签", briefnessMenu);
// .add('不同类型的 Button', buttonWithType)

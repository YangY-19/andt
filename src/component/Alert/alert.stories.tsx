import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";

import Alert from "./alert";
// import Icon from "../Icon/Icon";

const defaultAlert = () => (
  <>
    <Alert message="提示信息!"></Alert>
  </>
);

const briefnessAlert = () => (
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

const WithTypeAlert = () => (
  <div style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height:500
  }}>
    <Alert  message="提示信息!" description="提示的类容写在这里!"></Alert>
    <Alert message="提示信息!" description="提示的类容写在这里!" closable onClose={() => {alert('1')}}>  </Alert>
    <Alert message="提示信息!" description="提示的类容写在这里!" closable closeText="关闭">  </Alert>
    <Alert  message="提示信息!" description="提示的类容写在这里!"></Alert>
  </div>
)
storiesOf("Alert组件", module)
  .add("默认Alert", defaultAlert)
  .add("多样式Alert", briefnessAlert)
.add('其他Alert', WithTypeAlert)

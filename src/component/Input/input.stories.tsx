import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import { Input } from "../Input/input";
import Icon from "../Icon/Icon";

const defaultInput = () => (
  <>
    <Input />
    <Input
      passwordIcon
      onChange={(e) => {
        alert(e.target.value);
      }}
    />

    <Input
      disabled
      onChange={(e) => {
        alert(e.target.value);
      }}
    />

    <Input
      disabled
      prepend={<Icon theme="primary" icon="user"></Icon>}
      append={<Icon theme="primary" icon="search" />}
    />
  </>
);

const sizeInput = () => (
  <>
    <Input size="lg" />
    <Input />
    <Input size="sm" />
  </>
);

const numberInput = () => (
  <>
    <Input inputType="number" />
  </>
);

const briefnesInput = () => (
  <>
    <Input
      prepend={<Icon theme="primary" icon="user"></Icon>}
      append={<Icon theme="primary" icon="search" />}
    />

    <Input
      lastIcon={<Icon theme="primary" icon="user"></Icon>}
      firstIcon={<Icon theme="primary" icon="search" />}
    />
  </>
);

const textarea = () => (
  <>
    <Input type="textarea" cols={10} rows={10} />
  </>
);

storiesOf("Input组件", module)
  .add("默认Input", defaultInput)
  .add("带图标Input", briefnesInput)
  .add("不同大小Input", sizeInput)
  .add("数字Input", numberInput)
  .add("文本域", textarea);

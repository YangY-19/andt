import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";

import Tabs from "./tabs";
import TabItem from "./tabItem";
import Icon from "../Icon/Icon";

const defaultMenu = () => (
  <>
    <Tabs>
      <TabItem addIcon={<Icon icon="coffee"></Icon>} tab="第一页">
        第一页类容
      </TabItem>
      <TabItem tab="第二页">第二页类容</TabItem>
    </Tabs>
  </>
);

const briefnessMenu = () => (
  <>
    <Tabs type="card">
      <TabItem addIcon={<Icon icon="coffee"></Icon>} tab="第一页">
        第一页类容
      </TabItem>
      <TabItem tab="第二页">第二页类容</TabItem>
    </Tabs>
    <Tabs type="line">
      <TabItem addIcon={<Icon icon="coffee"></Icon>} tab="第一页">
        第一页类容
      </TabItem>
      <TabItem tab="第二页">第二页类容</TabItem>
    </Tabs>
  </>
);

// const buttonWithType = () => (
//   <>
//     <Button btnType="primary"> primary button </Button>
//     <Button btnType="danger"> danger button </Button>
//     <Button btnType="link" href="https://google.com"> link button </Button>
//   </>
// )
storiesOf("标签组件", module)
  .add("默认标签", defaultMenu)
  .add("简约样式标签", briefnessMenu);
// .add('不同类型的 Button', buttonWithType)

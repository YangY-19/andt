import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";

import MenuItem from "./menuItem";
import Menu from "./menu";
import SubMenu from "./subMenu";

const defaultMenu = () => (
  <>
    <Menu mode="horizontal">
      <SubMenu title="首页">
        <MenuItem>首页一</MenuItem>
        <MenuItem>首页二</MenuItem>
      </SubMenu>
      <MenuItem>图片</MenuItem>
      <MenuItem>视频</MenuItem>
    </Menu>

    <div style={{ width: 200 }}>
      <Menu mode="vertical">
        <SubMenu title="首页">
          <MenuItem>首页一</MenuItem>
          <MenuItem>首页二</MenuItem>
        </SubMenu>
        <MenuItem>图片</MenuItem>
        <MenuItem>视频</MenuItem>
      </Menu>
    </div>
  </>
);

const briefnessMenu = () => (
  <>
    <Menu mode="horizontal" chinoiserie={false}>
      <SubMenu title="首页">
        <MenuItem>首页一</MenuItem>
        <MenuItem>首页二</MenuItem>
      </SubMenu>
      <MenuItem>图片</MenuItem>
      <MenuItem>视频</MenuItem>
    </Menu>

    <div style={{ width: 200 }}>
      <Menu mode="vertical" chinoiserie={false}>
        <SubMenu title="首页">
          <MenuItem>首页一</MenuItem>
          <MenuItem>首页二</MenuItem>
        </SubMenu>
        <MenuItem>图片</MenuItem>
        <MenuItem>视频</MenuItem>
      </Menu>
    </div>
  </>
);

// const buttonWithType = () => (
//   <>
//     <Button btnType="primary"> primary button </Button>
//     <Button btnType="danger"> danger button </Button>
//     <Button btnType="link" href="https://google.com"> link button </Button>
//   </>
// )
storiesOf("菜单组件", module)
  .add("默认菜单", defaultMenu)
  .add("简约样式菜单", briefnessMenu);
// .add('不同类型的 Button', buttonWithType)

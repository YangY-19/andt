import React from "react";
import { storiesOf } from "@storybook/react";
import Alert from "./component/Alert/alert";
import Button from "./component/Button/button";
import Tabs from "./component/Tabs/tabs";
import TabItem from "./component/Tabs/tabItem";
import Icon from "./component/Icon/Icon";
import MenuItem from "./component/Menu/menuItem";
import Menu from "./component/Menu/menu";
import SubMenu from "./component/Menu/subMenu";
storiesOf("Welcome page", module).add(
  "welcome",
  () => {
    return (
      <div
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "#08c", lineHeight: "100px" }}>
          欢迎来到 andt 组件库
        </h1>
        <h3>
          andt 是 模仿{" "}
          <a href="https://ant.design/components/affix-cn/">Ant Design</a>{" "}
          来开发的一个组件库
        </h3>
        <h3 style={{ lineHeight: "60px" }}>安装试试</h3>
        <h4 style={{ color: "#08c", lineHeight: "60px" }}>
          npm install andt --save
        </h4>
        <h3 style={{ lineHeight: "80px" }}>基础组件展示</h3>
        <div
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px #08c solid",
            padding: 30,
          }}
        >
          <div>
            <Button>登录</Button>
          </div>
          <div style={{ marginTop: 20 }}>
            <Alert message="提示信息!"></Alert>
          </div>

          <div style={{ marginTop: 20, width: 400 }}>
            <Menu mode="horizontal">
              <MenuItem>图片</MenuItem>
              <SubMenu title="首页">
                <MenuItem>首页一</MenuItem>
                <MenuItem>首页二</MenuItem>
              </SubMenu>
              <MenuItem>视频</MenuItem>
            </Menu>
          </div>

          <div style={{ marginTop: 20, width: 400 }}>
            <Tabs>
              <TabItem addIcon={<Icon icon="coffee"></Icon>} tab="第一页">
                第一页类容
              </TabItem>
              <TabItem tab="第二页">第二页类容</TabItem>
              <TabItem tab="第三页">第三页类容</TabItem>
            </Tabs>
          </div>
        </div>
      </div>
    );
  },
  { info: { disable: true } }
);

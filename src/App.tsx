import React, { useState } from "react";
import "./App.css";
import Button from "./component/Button/button";
import Menu from "./component/Menu/menu";
import SubMenu from "./component/Menu/subMenu";
import MenuItem from "./component/Menu/menuItem";
// import Alert from './component/Alert/alert'
import Tabs from "./component/Tabs/tabs";
import TabItem from "./component/Tabs/tabItem";
import Icon from "./component/Icon/Icon";
import Transition from "./component/Transition/transition";
const App: React.FC = () => {
  const [count, setCount] = useState(true);
  const FUN = (e: any) => {
    setCount(!count);
  };

  return (
    <div className="App">
      {/* <Button btnType='link' href="www.baidu.com">登录</Button>
       <Button  btnType='primary' size="lg">登录</Button>
       <Button onClick={() => {alert('1')}} >登录</Button> */}
      <div>
        <Menu
          defaultIndex="0"
          defaultOpenSubMenus={["2"]}
          mode="horizontal"
          chinoiserie={false}
  
        >
          <MenuItem>视频</MenuItem>
          <MenuItem>图片</MenuItem>
          <SubMenu title="主页">
            <MenuItem>首页1</MenuItem>
            <MenuItem>首页2</MenuItem>
          </SubMenu>
          <MenuItem>视频</MenuItem>
          <MenuItem>图片</MenuItem>
        </Menu>
      </div>
      {/* <Alert onClose={() => {alert('1')}} message="测试一下标题"  closable ></Alert> */}
      {count ? "trure" : "false"}
      <Transition in={count} timeout={300} animation="zoom-in-left">
        <div>
          {" "}
          <Button
            onClick={() => {
              alert("1");
            }}
          >
            登录
          </Button>
        </div>
      </Transition>
      <Tabs
        onTabClick={(e) => {
          FUN(e);
        }}
      >
        <TabItem addIcon={<Icon icon="coffee"></Icon>} tab="第一页">
          第一页类容
        </TabItem>
        <TabItem tab="第二页">第二页类容</TabItem>
      </Tabs>
      <Icon icon="coffee"></Icon>
    </div>
  );
};

export default App;

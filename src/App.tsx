import React from 'react';
import './App.css';
// import Button from './component/Button/button'
import Menu from './component/Menu/menu'
import SubMenu from './component/Menu/subMenu'
import MenuItem from './component/Menu/menuItem'
// import { Menu, MenuI } from 'vikingship'
const App: React.FC = () => {
  return (
    <div className="App" >
       {/* <Button btnType='link' href="www.baidu.com">登录</Button>
       <Button  btnType='primary' size="lg">登录</Button>
       <Button onClick={() => {alert('1')}} >登录</Button> */}
       <div >
       <Menu defaultIndex='0'   onSelect={(index) => {}} chinoiserie={true}>
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
       {/* <Menu defaultIndex='0' onSelect={(index) => {}} >
         <Menu.Item>视频</Menu.Item>
         <Menu.Item>图片</Menu.Item>
         <Menu.SubMenu title="主页">
             <Menu.Item>首页</Menu.Item>
             <Menu.Item>首页</Menu.Item>
         </Menu.SubMenu>
         <Menu.Item>视频</Menu.Item>
         <Menu.Item>图片</Menu.Item>
       </Menu> */}
    </div>
  );
}

export default App

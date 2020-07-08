import React from 'react';
import './App.css';
// import Button from './component/Button/button'
import Menu from './component/Menu/menu'
import SubMenu from './component/Menu/subMenu'
import MenuItem from './component/Menu/menuItem'
const App: React.FC = () => {
  return (
    <div className="App" >
       {/* <Button btnType='link' href="www.baidu.com">登录</Button>
       <Button  btnType='primary' size="lg">登录</Button>
       <Button onClick={() => {alert('1')}} >登录</Button> */}
       <Menu defaultIndex='0' mode="vertical" onSelect={(index) => {}} chinoiserie={false}>
         <SubMenu title="主页">
            <MenuItem>首页</MenuItem>
             <MenuItem>首页</MenuItem>
         </SubMenu>
         <MenuItem>视频</MenuItem>
         <MenuItem>图片</MenuItem>
       </Menu>
    </div>
  );
}

export default App

import React from 'react';
import './App.css';
// import Button from './component/Button/button'
import Menu from './component/Menu/menu'
import MenuItem from './component/Menu/menuItem'
const App: React.FC = () => {
  return (
    <div className="App" >
       {/* <Button btnType='link' href="www.baidu.com">登录</Button>
       <Button  btnType='primary' size="lg">登录</Button>
       <Button onClick={() => {alert('1')}} >登录</Button> */}
       <Menu defaultIndex={0} onSelect={(index) => {alert(index)}}>
         <MenuItem index={0}>首页</MenuItem>
         <MenuItem index={1} disabled>视频</MenuItem>
         <MenuItem index={2}>图片</MenuItem>
       </Menu>
    </div>
  );
}

export default App

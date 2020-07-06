import React from 'react';
import './App.css';
import Button, {ButtonType, ButtonSize} from './component/Button/button'
const App: React.FC = () => {
  return (
    <div className="App" >
       <Button btnType={ButtonType.Link}>登录</Button>
       <Button size={ButtonSize.Large}>登录</Button>
       <Button>登录</Button>
    </div>
  );
}

export default App;

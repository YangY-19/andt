import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './button'
import Icon from "../Icon/Icon";

const defaultButton = () => (
  <div className='line-box'>
    <Button onClick={action('clicked')}> 默认样式 </Button>
    <Button icon={<Icon icon="coffee"></Icon>}  onClick={action('clicked')}> 默认样式 </Button>
  </div>
)

const buttonWithSize = () => (
  <div className='line-box1'>
    <Button  size="lg"> 大按钮 </Button>
    <Button  > 中按钮 </Button>
    <Button  size="sm"> 小按钮 </Button>
  </div>
)

const buttonWithType = () => (
  <div className='line-box'>
    <Button btnType="chinoiserie"> 中国风按钮 </Button>
    <Button btnType="primary"> 基本按钮</Button>
    <Button btnType="default"> 默认按钮 </Button>
    <Button btnType="danger"> 危险按钮 </Button>
    <Button btnType="link" href="https://google.com"> 链接按钮</Button>
  </div>
)
storiesOf('按钮组件', module)
  .add('按钮', defaultButton)
  .add('不同尺寸的 按钮', buttonWithSize)
  .add('不同类型的 按钮', buttonWithType)
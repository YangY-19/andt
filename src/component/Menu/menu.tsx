import React, { FC, CSSProperties } from 'react'
import classNames from 'classnames'

type MenuMode = 'horizontal' | 'vertical'
interface MenuProps {
   defaultIndex?: String,
   className?: String,
   mode?: MenuMode,
   style?: CSSProperties,
   onSelect?: (selectedIndex: number) => void,
   defaultOpenSubMenus?: string[]
}

export const Menu: FC<MenuProps> = props => {
    const { defaultIndex, className, mode, style, onSelect, defaultOpenSubMenus, children } = props
    const classes = classNames('menu', className, { 
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical',
    })
   return (
       <ul className={ classes } style={ style }>
           { children }
       </ul>
   )
}

Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenus: []
}

export default Menu
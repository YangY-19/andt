import React, { FC, CSSProperties, createContext, useState } from 'react'
import classNames from 'classnames'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: number) => void
interface MenuProps {
   defaultIndex?: number,
   className?: string,
   mode?: MenuMode,
   style?: CSSProperties,
   onSelect?: SelectCallback,
   defaultOpenSubMenus?: string[]
}

interface IMenuContext {
   index: number,
   onSelect?: SelectCallback
}

export const MenuContext =  createContext<IMenuContext>({ index: 0})
export const Menu: FC<MenuProps> = props => {
    const { defaultIndex, className, mode, style, onSelect, defaultOpenSubMenus, children } = props
    const [ currentActive, setActive ] = useState(defaultIndex);
    const classes = classNames('menu', className, { 
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical',
    })
    const handleClick = (index: number) => {
        debugger
        setActive(index)
        if (onSelect) {
            onSelect(index)
        }
    }
    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : 0,
        onSelect: handleClick
    }
   return (
       <ul className={ classes } style={ style }>
           <MenuContext.Provider value={ passedContext }>
               { children }
           </MenuContext.Provider>
       </ul>
   )
}

Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal',
    defaultOpenSubMenus: []
}

export default Menu
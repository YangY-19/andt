import React, { FC, CSSProperties, createContext, useState, Children, FunctionComponentElement, cloneElement, ReactElement } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: string) => void
interface MenuProps {
   defaultIndex?: string,
   chinoiserie?: boolean,
   className?: string,
   mode?: MenuMode,
   style?: CSSProperties,
   onSelect?: SelectCallback,
   defaultOpenSubMenus?: string[],
   favIcon?: ReactElement
}

interface IMenuContext {
   index: string,
   menuType?: string,
   onSelect?: SelectCallback,
   chinoiserie?: boolean,
   mode?: MenuMode,
   defaultOpenSubMenus?: string[]
}

export const MenuContext =  createContext<IMenuContext>({ index: '0'})
export const Menu: FC<MenuProps> = props => {
    const { defaultIndex, className, mode, style, onSelect, defaultOpenSubMenus, children, chinoiserie, favIcon } = props
    const [ currentActive, setActive ] = useState(defaultIndex);
    //menu className
    const classes = classNames('viking-menu', className, { 
        'menu-vertical': mode === 'vertical' && !chinoiserie,
        'menu-horizontal': mode !== 'vertical',
        [`menuType-chinoiserie-horizontal`]:  mode !== 'vertical' && chinoiserie,
        [`menuType-chinoiserie-vertical`]:  mode === 'vertical' && chinoiserie
    })

    const favIconClasses = classNames('menu-logo', )

    const handleClick = (index: string) => {
        setActive(index)
        if (onSelect) {
            onSelect(index)
        }
    }

    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick,
        menuType : chinoiserie ? 'chinoiserie' : '',
        mode,
        defaultOpenSubMenus
    }

    const renderChildren = () => {
        return Children.map(children, (child, index) => {
            const childElement = child as FunctionComponentElement<MenuItemProps>
            const { displayName } = childElement.type
            if (displayName === "MenuItem" || "subMenu") {
               return cloneElement(childElement, {
                    index: index.toString()
                }) 
            } else {
                console.error("警告:菜单有一个不是MenuItem组件的子元素")
            }
        })
    }

    // favIcon
    const faviconChildren = () => {
         if (favIcon?.type === 'img') {
            return favIcon
         } else {
             return console.error('警告: favIcon应该为<img>标签');  
         }      
    }

    return (
        <ul className={ classes } style={ style }>
            <div className={ favIconClasses }> { faviconChildren() }</div>
            <MenuContext.Provider value={ passedContext }>
                { renderChildren() }
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    chinoiserie: true,
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenus: []
}

export default Menu
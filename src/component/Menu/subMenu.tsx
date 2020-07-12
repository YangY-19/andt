import React, { FC, CSSProperties, Children, FunctionComponentElement, cloneElement, useContext, MouseEvent, useState } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'
import { MenuContext } from './menu'

interface SubMenuProps {
    index?: string,
    title?: string,
    className?: string,
    style?: CSSProperties
}
const SubMenu: FC<SubMenuProps> = props => {
    const { index, children, className, title, style } = props
    const context = useContext(MenuContext)
    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index,
        'menu-item-chinoiserie': context.menuType
    })

    const openedSubMenus = context.defaultOpenSubMenus as Array<string>
    const isOpened:boolean = (index && context.mode === "vertical") ? openedSubMenus.includes(index) : false
    const [menuOpen, setOpen] = useState(isOpened)
    const handleClick = (e: MouseEvent) => {
        e.preventDefault()
        setOpen(!menuOpen)
    }

    const titleClasses = classNames('submenu-title', {
       "title-active": menuOpen
    })

    const clickEvents = context.mode === 'vertical' ? {
        onClick: handleClick
    } : ''

    let timer: any
    const handleMouse = (e:MouseEvent, toggle: boolean) => {
         clearTimeout(timer)
         e.preventDefault()
         timer = setTimeout(() => {
            setOpen(toggle)
         }, 300)
    }


const  func = (congfig:SubMenuProps) => {

}
func({index: '1', cc: 2} as SubMenuProps)


    const hoverEvents = context.mode !=='vertical' ? {
       onMouseEnter: (e: MouseEvent) => { handleMouse(e, true,) },
       onMouseLeave: (e: MouseEvent) => { handleMouse(e, false) }
    } : ''
    const renderChildren = () => {
        const subMenuClasses = classNames('viking-submenu', {
            'menu-opened': menuOpen
          })
        const childrenComponent =  Children.map( children, (child, i) => {
            const childElement = child as FunctionComponentElement<MenuItemProps>
            const { displayName } = childElement.type
            if (displayName === 'MenuItem') {
                return cloneElement(childElement, {
                    index: `${index}-${i}`
                })
            }
        })

        return (
            <ul className={subMenuClasses}>
                { childrenComponent }
            </ul>
        )
    }

    
    return (
        <li key={index} className={classes} style={style} { ...hoverEvents } >
            <div className={titleClasses}  { ...clickEvents }> { title } </div>
              { renderChildren() }
        </li>
    )
}

SubMenu.displayName = "SubMenu"

export default SubMenu
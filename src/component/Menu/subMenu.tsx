import React, { FC, CSSProperties, Children, FunctionComponentElement, cloneElement, useContext } from 'react'
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
    const classes = classNames('viking-submenu', className, {
        // [`menu-item-chinoiserie`]: true
        // 'is-active': context.index === index
    })
    const renderChildren = () => {
        return Children.map( children, (child, i) => {
            const childElement = child as FunctionComponentElement<MenuItemProps>
            const { displayName } = childElement.type
            if (displayName === 'MenuItem') {
                return cloneElement(childElement, {
                    index: `${index}-${i}`
                })
            }
        })
    }
    return (
        <li className={classes} style={style}>
            <div className="submenu-title"> { title } </div>
              { renderChildren() }
        </li>
    )
}

SubMenu.displayName = "SubMenu"

export default SubMenu
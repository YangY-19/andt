import React, { FC, CSSProperties, useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
interface MenuItemProps {
    index?: number,
    disabled?: boolean,
    className?: string,
    style?: CSSProperties
}
export const MenuItem: FC<MenuItemProps> = props => {
    const { index, disabled, className, style, children } = props
    const context = useContext(MenuContext)
    const classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    })
    
    const handleClick = () => {
        debugger
        if (context.onSelect && !disabled && (typeof index === 'number') ) {
            context.onSelect(index)
        }
    }
    return (
        <li style={style} className={ classes } onClick={handleClick}> { children } </li>
    )
}

// MenuItem.propTypes = {
   
// }

export default MenuItem
import React, { FC, CSSProperties } from 'react'
import classNames from 'classnames'

interface MenuItemProps {
    index?: string,
    disabled?: boolean,
    className?: string,
    style?: CSSProperties
}
export const MenuItem: FC<MenuItemProps> = props => {
    const { index, disabled, className, style, children } = props
    const classes = classNames('menu-item', className, {

    })
    return (
        <li style={style} className={ classes }> { children } </li>
    )
}

// MenuItem.propTypes = {
   
// }

export default MenuItem
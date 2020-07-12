import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react';
import classNames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faCoffee, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faCheckSquare, faCoffee)

export type TheneProps = 'chinoiserie' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'light' | 'dark'
export interface IconProps extends FontAwesomeIconProps {
    theme?: TheneProps
}


export const Icon:FC<IconProps> = props => {
    const { className, theme, ...resultProps } = props
    const classes = classNames('andt-icon', className, {
        [`icon-${theme}`]: theme
    })
    return (
        <FontAwesomeIcon className={classes} {...resultProps} />
    )
}

Icon.defaultProps = {
    theme: 'chinoiserie'
}

export default Icon
import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes, ReactElement} from 'react';
import classNames from 'classnames'
import { IconProps } from '../Icon/Icon'

export type ButtonSize = "lg" | "sm"
export type ButtonType = "chinoiserie" | "primary" | "default" | "danger" | "link"

interface BaseButtonProps {
    className?: string,
    btnType?: ButtonType,
    disabled?: boolean,
    size?: string,
    children?: React.ReactNode,
    href?: string,
    icon?: ReactElement | IconProps | string,
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button:FC<ButtonProps> = props => {
   const { className, btnType, disabled, size, icon, children, href, ...restProps} = props
   const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  })
      if (btnType === 'link' && href) {
          return (
              <a href={href} className={classes} {...restProps}> { children } </a>
          ) 
      } else {
          return (
          <button className={classes} disabled={disabled} {...restProps}> { icon ? <span><span>{icon}</span><span>{children}</span></span> : children } </button>
          )
      }
}

Button.defaultProps = {
    disabled: false,
    btnType: 'chinoiserie'
  }

export default Button;
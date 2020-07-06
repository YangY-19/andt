import React, {FC} from 'react';
import classNames from 'classnames'

export enum ButtonSize {
    Large = "lg",
    Small = "sm"
}

export enum ButtonType {
   Chinoiserie = "Chinoiserie",
   Primary = "primary",
   Default = "default",
   Danger = "danger",
   Link = "link"
}

interface BaseButtonProps {
    className?: string,
    btnType?: ButtonType,
    disabled?: boolean,
    size?: string,
    chidren?: React.ReactNode,
    href?: string
}

export const Button:FC<BaseButtonProps> = props => {
   const { className, btnType, disabled, size, children, href, } = props
   const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  })
      if (btnType === ButtonType.Link && href) {
          return (
            <a href={href} className={classes}> { children } </a>
          ) 
      } else {
          return (
              <button className={classes} disabled={disabled}> { children } </button>
          )
      }
}

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Chinoiserie
  }

export default Button;
import React, { FC, ReactElement, useState } from 'react'
import classNames from 'classnames'

export type AlertType = 'chinoiserie' | 'success' | 'info' | 'warning' | 'error'

interface AlertProps {
    message: string, //标题
    description?: string, //类容
    className?: string,
    type?: AlertType,
    closable?: boolean, //是否显示关闭按钮
    closeText?: ReactElement | string, //自定义关闭按钮
    onClose?: () => void,
}

export const Alert:FC<AlertProps> = props => {
    const { message, description, className, type, closeText, closable, onClose } = props
    const [show, setShow] = useState(false)
    const classes = classNames('alert', className, {
        [`alert-${type}`]: type,
        'hide': show
    })

    const typeIcon = ():ReactElement => {
        if (type === 'success') {
            return <i style={{padding: "0 4px"}}>S</i>
        } else if (type === 'info') {
            return <i style={{padding: "0 4px"}}>I</i>
        } else if (type === 'warning') {
            return <i style={{padding: "0 4px"}}>W</i>
        } else if (type === 'error') {
            return <i style={{padding: "0 4px"}}>E</i>
        } else {
            return <i></i>
        }
    }

    const handleClose = () => {
        setShow(true)
        onClose && onClose()
    }

    return(
        <div className={classes} >
            <div className="messages">
                <p>
                    { typeIcon() }
                    { message }
                </p>
                {
                    closable && <p className='closeText' onClick={handleClose}>{ closeText ? closeText : 'X' }</p> 
                }
            </div>
                {
                    description 
                    && 
                    <div className='description'>
                        { description }
                    </div>
               }
        </div>
    )
}

Alert.defaultProps = {
    type: 'info'
}

export default Alert
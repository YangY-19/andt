import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react';
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Icon = () => {
    return (
        <FontAwesomeIcon icon={faCoffee} />
    )
}

export default Icon
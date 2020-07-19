import React, { FC, useContext } from 'react'
import {SelectContext} from './select'

export interface OptionProps {
    key?: string,
    value: string,
    disabled?:boolean,
    title?: string,
    className?: string,
}

export const Option:FC<OptionProps> = ({value, children}) => {
    const Context = useContext(SelectContext)
    const handleSelect = (value:string | number, children: any) => {
        debugger
        if(Context.onSelect) {
            Context.onSelect(value, children)
            // setInputinputVal(children)
            // onChange && onChange(value)
        }
    }
    return (<li className="andt-option" key={value} onClick={(e) => handleSelect(value, children)}>{children}</li>);
}

Option.displayName = 'Option';

export default Option;
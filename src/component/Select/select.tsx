import React, { FC, useState, useRef, ChangeEvent, Children, createContext, FunctionComponentElement, cloneElement } from 'react'
import classNames from 'classnames'
import Icon, { IconProps } from "../Icon/Icon";
import useClickOutside from '../../hooks/useClickOutside'
import { OptionProps } from './option'

interface SelectProps {
    defaultValue?: string,
    disabled?:string,
    placeholder?:string,
    showArrow?:boolean,
    suffixIcon?: IconProps,
    onChange?: (value: string | number) => void
}

interface IMenuContext {
    onSelect?: (value:string | number, children: string) => void
}
export const SelectContext = createContext<IMenuContext>({value:'0'})
export const Select: FC<SelectProps> = (props) => {
    const { suffixIcon, children, onChange } = props
    const [inputFocus, setInputFocus] = useState(false)
    const [inputVal, setInputinputVal] = useState('')

    const classes = classNames('andt-select-selector', {
       'input-is-active': inputFocus
    })
    const componentRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    useClickOutside(componentRef, () => (setInputFocus(false)))
    const handleInput = () => {
        setInputFocus(true)
        setTimeout(() => {
            inputRef.current?.focus()
        })
    }

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        setInputinputVal(val)
    }

    const handleSelect = (value:string | number, children: any) => {
        debugger
        setInputinputVal(children)
        onChange && onChange(value)
    }

    const passedContext: IMenuContext = {
       onSelect: handleSelect
    }

    

    const renderChildren = () => {
        return Children.map(children, (child, index) => {
            const childElement = child as FunctionComponentElement<OptionProps>
            const { type: { displayName },
                    // props: { value, children }
             } = childElement;
            if (displayName === 'Option') {
              return cloneElement(childElement, {
                key: index.toString()
              })
            }
        })
    }
    
    return (
      <div className="andt-select">
          <div>
            <div className={classes} onClick={() => {handleInput()}} ref={componentRef}>
                {
                    inputFocus ?
                    <span className="input">
                        <input type="text" value={inputVal} onChange={(e) => {handleChange(e)}} ref={inputRef}/>
                    </span>
                    :
                    <span className="input-text">
                        { inputVal }
                    </span>
                }
                
                <span className="icon">
                    <Icon icon="search"></Icon>
                </span>
            </div>
            {
                suffixIcon && <span> { suffixIcon } </span>
            }
          </div>
          <ul className="andt-option-list">
              <SelectContext.Provider value={passedContext}>
              {
                  renderChildren()
              }
              </SelectContext.Provider>
          </ul>
         
      </div>
    );
}

export default Select;
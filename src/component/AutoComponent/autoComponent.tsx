import React, { FC, ChangeEvent, useState } from 'react'
import Input, { InputProps } from '../Input/input'

interface AutoCompleteProps extends Omit<InputProps, 'onSelet'>{
    fetchSuggestions: (keyword: string) => string[],
    onSelet?:(value:string) => void,
}
const AutoComponent:FC<AutoCompleteProps> = props => {
    const { fetchSuggestions, onSelet, value, ...resultProps } = props

    const [inputValue, setInputValue] = useState(value)
    const [suggestions, setsuggestions] = useState<string[]>([])
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim()
        setInputValue(value)
        if(value) {
            const results = fetchSuggestions(value)
            setsuggestions(results)
        }
    }

  alert(suggestions)
   return (
    <div className="viking-auto-complete">
        <Input inputType="text" value={inputValue} onChange={handleChange} {...resultProps} />
    </div>
   )
}

export default AutoComponent;
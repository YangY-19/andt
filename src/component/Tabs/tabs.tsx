import React, { FC, Children, FunctionComponentElement, cloneElement } from 'react'
import { TabItemProps } from './tabItem'

export type sizeType = 'lg' | 'default' | 'sm'
export type tabItemType = 'line' | 'card'
interface TabsProps {
    defaultActiveKey?: string,
    type?: tabItemType,
    size?: sizeType,
}
const Tabs:FC<TabsProps> = props => {
    const { defaultActiveKey, type, size, children } = props

    const renderChildren = () => {
        return Children.map(children, (child, index) => {
            debugger
            const childElement = child as FunctionComponentElement<TabItemProps>
            const { displayName } = childElement.type
             if (displayName === 'TabItem') {
                return cloneElement(childElement, {
                    index: index.toString()
                 })
             }
        })
    }

    return (
        <div>{ renderChildren() }</div>
    )
}

export default Tabs
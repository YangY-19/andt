import React, { FC, ReactElement, Children, useState, FunctionComponentElement } from 'react'
import { IconProps } from '../Icon/Icon'

export interface TabItemProps {
    index?:string,
    tab: ReactElement | string
    addIcon?: ReactElement | IconProps | string,
    activeKey?: string,
    className? : string,
}

const TabItem:FC<TabItemProps> = props => {
    const { children } = props
    // const [ tabList, setTabList ] = useState([])
    // const renderChildren = () => {
    //     return Children.map(children, (child, index) => {
    //         const childElement = child as FunctionComponentElement<TabItemProps>
    //         return 
    //     })
    // }
    return (
    <div className="tabs-content">{children}</div>
    )
}

TabItem.displayName = 'TabItem'

export default TabItem
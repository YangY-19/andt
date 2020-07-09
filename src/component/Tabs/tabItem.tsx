import React, { FC, ReactElement, Children } from 'react'

export interface TabItemProps {
    index?:string,
    tab: ReactElement | string
    addIcon?: ReactElement,
    activeKey?: string,
    className? : string,
    onChange?: () => void,
    onTabClick?: () => void,
}

const TabItem:FC<TabItemProps> = props => {
    const { tab, addIcon, activeKey, onChange, onTabClick, children } = props

    // const renderChildren = () => {
    //     return Children.map(children, (children, index) => {

    //     })
    // }
    return (
        <div>
            { children }
        </div>
    )
}

TabItem.displayName = 'TabItem'

export default TabItem
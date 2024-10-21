import React from "react"

type ListItemsProps = {
    firstName: string
    lastName: string
    age: number
}

type ListProps<T> = {
    // items: string[] | number[]
    items: T[]
    onClick: (value: T) => void
    renderListItem?: (item: T) => React.ReactNode
}

export const ResuableLists = <T extends string | number | ListItemsProps>({items, onClick,renderListItem }:ListProps<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => (
                <div key={index} onClick={() => onClick(item)}>
                    {/* {item} */}
                    {renderListItem ? renderListItem(item) : item.toString()}
                </div>
            ))}
        </div>
    )
}
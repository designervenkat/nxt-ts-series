import React from "react"

type CustomButtonProps = {
    variants: "primary" | "secondary" | "ghost"
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

export const CustomButton = ({variants, children, ...spread}:CustomButtonProps) => {
    return (
        <button className={`${variants}`} {...spread}>
            {children}
        </button>
    )
}
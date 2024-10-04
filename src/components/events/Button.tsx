type ButtonProps = {
    handleClick: () => void
}
export const Button = ({handleClick}: ButtonProps) => {
    return (
        <button type="button" onClick={handleClick}>Click me</button>
    )
}



type ButtonEventProps = {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>, id:number, name: string) => void
}

export const ButtonWithEvent = ({handleClick}: ButtonEventProps) => {
    return (
        <button type="button" onClick={(e) => handleClick(e, 1, "TS")}>Event Fired</button>
    )
}
type InputProps = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string
}
export const Input = ({handleChange, value}: InputProps) => {
    return (
        <input type="text" onChange={handleChange} value={value}/>
    )
}
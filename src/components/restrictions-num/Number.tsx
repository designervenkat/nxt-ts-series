type NumberType = {
 value: number, 
}

type PositiveNumber = NumberType & {
    isPositive?: boolean, 
    isNegative?: never, 
    isZero?: never
}


type NegativeNumber = NumberType & {
    isNegative?: boolean, 
    isPositive?: never, 
    isZero?: never
}

type ZeroNumber = NumberType & {
    isZero?: boolean
    isPositive?: never, 
    isNegative?: never, 
}



type NumberProps = PositiveNumber | NegativeNumber | ZeroNumber
export const PassNumber = ({value, isPositive, isNegative, isZero}: NumberProps) => {
    return (
        <div>
            {value} {isPositive && "Positive"} {isNegative && "Negative"} {isZero && "Zero"}
        </div>
    )
}
import React from "react"

type CardProps = {
    style?: React.CSSProperties,
    title: string,
    className?: string
}


export default function ProductCard({ title, style, className }:CardProps) {
  return (
    <div style={style} className={className}> 
         <h3>{title}</h3> 
    </div>
  )
}

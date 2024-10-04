type StateProps = {
    // state: string // accepts anything here
    state: "loading" | "success" | "error"  // unions fixed values provide
}

export const State = ({state}: StateProps) => {

    let message

    if (state === "loading") {
        message = "Loading data... ⏳"        
    } else if ((state === "success")) {
        message = "Send data successfully...  🎉 "      
    } else if ((state === "error")) {
        message = "Send Failed.. 😞" 
    }

    return (
        <div>
            <h2>Status = {message}</h2>
        </div>
    )
}
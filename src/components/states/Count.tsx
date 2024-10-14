import { useReducer } from 'react'

type CountState = {
   count: number
}

// type CountAction = {
//    type: 'increament' | 'decreament' | 'reset'
//    payload: number
// }


type UpdateAction = {
   type: 'increament' | 'decreament' 
   payload: number
}

type ResetAction = {
    type: "reset"
}


type CounterAction = UpdateAction | ResetAction 

const initialState = { count: 0 }

function reducer(state: CountState, action: CounterAction) {
   switch (action.type) {
      case 'increament':
         return { count: state.count + action.payload }
      case 'decreament':
         return { count: state.count - action.payload }
      case 'reset':
         return initialState
      default:
         return state
   }
}

export const CounterApp = () => {
   const [state, dispatch] = useReducer(reducer, initialState)

   return (
      <>
         <h1>Count : {state.count}</h1>

         <button
            type='button'
            onClick={() => dispatch({ type: 'increament', payload: 1 })}>
            Increament
         </button>

         <button
            type='button'
            onClick={() => dispatch({ type: 'decreament', payload: 1 })}>
            Decreament
         </button>
         <button
            type='button'
            onClick={() => dispatch({ type: 'reset' })}>
            Reset
         </button>
      </>
   )
}

import { Component } from 'react'


type CounterProps = {
    name: string
}

type CounterState = {
    count: number,
}



export default class CounterApp extends Component<CounterProps, CounterState> {

    state = {
        count: 0,        
    }

    handleClick = () => {
        this.setState((prevState) => ({count: prevState.count + 1}))
    }

  render() {
    return (
      <div>
         {this.props.name} - {this.state.count}
        <button className='bg-slate-500 px-6 py-3 mx-2 ' type="button" onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}

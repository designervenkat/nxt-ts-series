import {useEffect, useState, useRef} from 'react'

export default function Timer() {

    const [timer, setTimer] = useState(0)

    const intervalRef = useRef<number | null>(null)
    // const intervalRef = useRef<number | undefined>(undefined)

    const handleStopTimer = () => {
        // window.clearInterval(intervalRef.current)
        if(intervalRef.current) window.clearInterval(intervalRef.current)
    }

    useEffect(() => {

        intervalRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)

        return () => {
            handleStopTimer()
        }

    },[])

  return (
    <div>
        Timer = {timer} 

        <button type="button" onClick={handleStopTimer}> Stop Timer</button>
        
    </div>
  )
}

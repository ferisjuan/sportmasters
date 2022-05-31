import { useCallback, useEffect, useRef, useState } from 'react'

interface IUseTimer {
    time: number
}

export function useTimer(timeInms: number, interval: number): IUseTimer {
    const [time, setTime] = useState(timeInms)

    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const decreaseTime = useCallback((): void => setTime(prev => prev - interval), [interval])

    useEffect(() => {
        intervalRef.current = setInterval(decreaseTime, interval)

        if (time === 0) {
            clearInterval(intervalRef.current as NodeJS.Timeout)
        }

        return () => clearInterval(intervalRef.current as NodeJS.Timeout)
    }, [decreaseTime, interval, time])

    return {
        time,
    }
}

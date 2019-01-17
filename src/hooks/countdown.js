import { useState, useEffect, useRef } from 'react'

const COUNTDOWN_STATUS = {
  WAITING: 'WAITING',
  RUNNING: 'RUNNING',
  COMPLETE: 'COMPLETE',
  RESET: 'RESET'
}

export default function useCountdown(time) {
  const [remainingTime, setRemainingTime] = useState()
  const [countdownStatus, setCountdownStatus] = useState(COUNTDOWN_STATUS.WAITING)

  const timer = useRef()
  function startTimer (time) {
    if (!timer.current) {
      setRemainingTime(time)
      setCountdownStatus(COUNTDOWN_STATUS.RUNNING)
      timer.current = setInterval(() => {
        setRemainingTime(prevRemainingTime => {
          if (prevRemainingTime - 1 === 0) {
            stopTimer()
            return 0
          }
          return prevRemainingTime - 1
        })
      }, 1000)
    }
  }

  function stopTimer () {
    if (timer.current) {
      clearInterval(timer.current)

      setCountdownStatus(COUNTDOWN_STATUS.COMPLETE)
    }
  }

  function resetTimer () {
    if (timer.current) {
      setCountdownStatus(COUNTDOWN_STATUS.RESET)
      
      clearInterval(timer.current)
      timer.current = null

      setRemainingTime(time)
    }
  }

  useEffect(() => {
    console.log(`isRunning: ${countdownStatus}, timeRemaining: ${remainingTime}`)

    return () => {
      console.log('stop timer')
      stopTimer()
      resetTimer()
    }
  }, [])

  return { remainingTime, startTimer, stopTimer, resetTimer, countdownStatus }
}
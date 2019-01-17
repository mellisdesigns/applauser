import React, { useState } from 'react'

import ShowRunner from '../show-runner'
import useCountdown from '../../hooks/countdown'

import './Stage.css'

const Stage = () => {
  const [totalTimeValue, setTotalTimeValue] = useState(5)
  const {remainingTime, startTimer, stopTimer, resetTimer, countdownStatus} = useCountdown(totalTimeValue)

  function handleTimerClick (time) {
    switch(countdownStatus) {
      case 'RUNNING' :
        stopTimer()
      break

      case 'COMPLETE' :
        resetTimer()
      break

      default :
        startTimer(time)
      break
    }
  }

  function handleChangeEvent (event) {
    setTotalTimeValue(event.target.value)
  }

  function buttonLabel (status) {
    switch (countdownStatus) {
      case 'RUNNING' :
        return 'Stop Speech'
      
      case 'COMPLETE' :
        return 'Reset Speech'

      default :
       return 'Start Speech'
    }
  }

  return (
    <div className={`stage__wrapper ${(countdownStatus === 'RUNNING') ? 'stage__wrapper--running' : ''}`}>
      <div className="stage__content">
        {countdownStatus === 'WAITING' ?
        <form className="stage__form" >
          <input value={totalTimeValue} className="stage__input" type="number" placeholder="time in seconds" onChange={handleChangeEvent}/>
          <button type="button" className="stage__button" onClick={() => handleTimerClick(totalTimeValue)}>{buttonLabel(countdownStatus)}</button>
        </form> :

        <ShowRunner remainingTime={remainingTime} countdownStatus={countdownStatus} />
        }
      </div>
    </div>
  )
}

export default Stage
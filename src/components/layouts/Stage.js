import React, { useState, useEffect } from 'react'
import './Stage.css'

const Stage = () => {
  const [applauseState, setApplauseState] = useState('waiting')

  useEffect(() => {
    switch (applauseState) {
      case 'waiting' :
        console.log('waiting')
        break;

      case 'running' :
        console.log('running')
        break;

      case 'finished' :
        console.log('finished')
        break;
      
      default :
    }
  }, [applauseState])

  return (
    <div className={`stage__wrapper ${(applauseState === 'running') ? 'stage__wrapper--running' : ''}`}>
      <div className="stage__content">
        <form className="stage__form" >
          <input className="stage__input" type="number" placeholder="time in seconds"/>
          <button type="button" className="stage__button" onClick={() => setApplauseState('running')}>Speech Time</button>
        </form>
      </div>
    </div>
  )
}

export default Stage
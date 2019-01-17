import React from 'react'

import './show-runner.css'

const ShowRunner = props => {
  return (
    <div className="show-runner__wrapper">
      <div className="show-runner__status-panel show-runner__status-panel--running">
        <div className="show-runner__timer show-runner__timer--running">
          <span className="show-runner__timer-text">{props.remainingTime}</span>
        </div>
        <div className="show-runner__content">
          <q className="show-runner__motivation">You can do it, look at the crowd, they are going wild You can do it, look at the crowd, they are going wild</q>
        </div>
      </div>
    </div>
  )
}

export default ShowRunner
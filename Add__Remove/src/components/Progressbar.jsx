import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

function Progressbar() {
    const now = 60;
  return (
    <div>
        <ProgressBar now={now} label={`${now}%`} />
    </div>
  )
}

export default Progressbar
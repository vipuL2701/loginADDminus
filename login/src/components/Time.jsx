import React from 'react'
import moment from 'moment';

function Time() {
    const currentTime = moment();
    const formattedTime = currentTime.format('YYYY-MM-DD HH:mm:ss');
  
    return (
      <div>
        The current Date & Time is {formattedTime}.
      </div>
  )
}

export default Time
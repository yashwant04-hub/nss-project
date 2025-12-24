import React , { useState} from 'react'
import "./Clock.css"

const Clock = () => {

    let getTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(getTime);

    const updateTime = () => {
      getTime = new Date().toLocaleTimeString();
      setTime(getTime);
    };
  
    setInterval(updateTime, 1000);


  return (
    <div className="clock_main">
        <div className="clock_container">
          {time}
         </div>
    </div>
  )
}

export default Clock


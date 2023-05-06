import React from 'react'

export default function Subject({ handleValueSelect }) {
  const handleClick = (value) => {
    handleValueSelect(value);
  };
  return (
    <div id='subject'>
        <div className="topicCont">
        <div className="topicName" onClick={() => handleClick("operating system")}>Operating System</div>
        <div className="topicName" onClick={() => handleClick("Computer Network")}>Computer Network</div>
        <div className="topicName" onClick={() => handleClick("oops")}>Oops</div>
        <div className="topicName" onClick={() => handleClick("database")}>Database</div>
        <div className="topicName" onClick={() => handleClick("software engineering")}>Software Engineering</div>
        {/* <div className="topicName">Nodejs</div>
        <div className="topicName">expressjs</div>
        <div className="topicName">MongoDB</div>
        <div className="topicName">SQL</div>
        <div className="topicName">Git</div> */}
      </div>
    </div>
  )
}

import React from 'react'

export default function Subject({ handleValueSelect }) {
  const handleClick = (value) => {
    handleValueSelect(value);
  };
  return (
    <div id='subject'>
        <div className="topicCont">
        <div className="topicName" onClick={() => handleClick("os")}>Operating System</div>
        <div className="topicName" onClick={() => handleClick("cn")}>Computer Network</div>
        <div className="topicName" onClick={() => handleClick("oops")}>Oops</div>
        <div className="topicName" onClick={() => handleClick("dbms")}>Database</div>
        <div className="topicName" onClick={() => handleClick("se")}>Software Engineering</div>
        {/* <div className="topicName">Nodejs</div>
        <div className="topicName">expressjs</div>
        <div className="topicName">MongoDB</div>
        <div className="topicName">SQL</div>
        <div className="topicName">Git</div> */}
      </div>
    </div>
  )
}

import React  from 'react'

export default function webdevelopment({ handleValueSelect }) {
  const handleClick = (value) => {
    handleValueSelect(value);
  };
  return (
    <div id='webDpage'>
      <div className="topicCont">
        <div className="topicName" onClick={() => handleClick("html")}>HTML</div>
        <div className="topicName" onClick={() => handleClick("css")}>CSS</div>
        <div className="topicName" onClick={() => handleClick("javascript")}>Javascritp</div>
        <div className="topicName" onClick={() => handleClick("react")}>Reactjs</div>
        <div className="topicName" onClick={() => handleClick("vue")}>Vuejs</div>
        <div className="topicName" onClick={() => handleClick("node")}>Nodejs</div>
        <div className="topicName" onClick={() => handleClick("express")}>expressjs</div>
        <div className="topicName" onClick={() => handleClick("mongodb")}>MongoDB</div>
        <div className="topicName" onClick={() => handleClick("sql")}>SQL</div>
        <div className="topicName" onClick={() => handleClick("java")}>Java</div>
        <div className="topicName" onClick={() => handleClick("php")}>Php</div>
        <div className="topicName" onClick={() => handleClick("python")}>Python</div>
        <div className="topicName" onClick={() => handleClick("cpp")}>C/C++</div>
        <div className="topicName" onClick={() => handleClick("testing")}>Testing</div>
        <div className="topicName" onClick={() => handleClick("git")}>Git</div>
      </div>
    </div>
  )
}

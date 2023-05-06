import React from 'react'

export default function DataStructure({ handleValueSelect }) {
  const handleClick = (value) => {
    handleValueSelect(value);
  };
  return (
    <div id='datastructure'>
    <div className="topicCont">
    <div className="topicName" onClick={() => handleClick("searching")}>Searching</div>
    <div className="topicName" onClick={() => handleClick("sorting")}>Sorting</div>
    <div className="topicName" onClick={() => handleClick("algorithm")}>Algorithm</div>
    <div className="topicName" onClick={() => handleClick("array")}>Array</div>
    <div className="topicName" onClick={() => handleClick("linkedlist")}>Linkedlist</div>
    <div className="topicName" onClick={() => handleClick("stack")}>Stack</div>
    <div className="topicName" onClick={() => handleClick("queue")}>Queue</div>
    <div className="topicName" onClick={() => handleClick("heap")}>Heap</div>
    <div className="topicName" onClick={() => handleClick("hashing")}>Hashing</div>
    <div className="topicName" onClick={() => handleClick("tree")}>Tree</div>
    <div className="topicName" onClick={() => handleClick("graph")}>Graph</div>
  </div>
</div>
  )
}

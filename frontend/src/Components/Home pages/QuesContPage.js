import React, { useState } from 'react';
import Webdevelopment from './Webdevelopment';
import DataStructure from './DataStructure';
import Subject from './Subject';
import QuestionPage from './QuestionPage';

export default function QuesContPage() {
  const [activeLink, setActiveLink] = useState('webdev');
  const [selectedValue, setSelectedValue] = useState('html');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleValueSelect = (value) => {
    setSelectedValue(value);
  };

  const renderContent = () => {
    switch (activeLink) {
      case 'webdev':
        return <Webdevelopment handleValueSelect={handleValueSelect} />;
      case 'ds':
        return <DataStructure handleValueSelect={handleValueSelect} />;
      case 'subj':
        return <Subject handleValueSelect={handleValueSelect} />;
      default:
        return null;
    }
  };

  return (
    <div className='quesContPage'>
      <div className="outerCont">
        <div className="fieldBox">
          {/* topic container  */}
          <div className='fieldNameCont'>
            <div className='fieldName' id='webD' onClick={() => handleLinkClick('webdev')}>Web Development</div>
            <div className='fieldName' id='dsa' onClick={() => handleLinkClick('ds')}>Data Structures and algorithm</div>
            <div className='fieldName' id='core' onClick={() => handleLinkClick('subj')}>Core Subjects</div>
          </div>
          <div className='fieldTopicCont'>
            {renderContent()}
          </div>
        </div>

        {/* question and answer container  */}
        <QuestionPage selectedValue={selectedValue} />
      </div>
    </div>
  )
}

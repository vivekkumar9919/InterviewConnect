import React from 'react'

export default function TopPage() {
  return (
    <div className='topPageCont'>
      <div className='wave'></div>
      <div className="topBox1">
        <div className="topBoxText">
          <div id="heading">Let's connect you with success!</div>
          <div class="divider"><span></span><span>InterviewConnect</span><span></span></div>
          <div id="content">Your one-stop destination for acing your next software developer interview!
            With our comprehensive content and topic-wise
            interview questions on <b><i>Web Development</i></b> , <b><i>Data Structure and algorithm </i></b>, <b><i>Core Subjects</i></b> and more,
            you'll be well-prepared to showcase your skills and land your dream job.
          </div>
          <div id="getstartedBtn">
            <button id='getButton'>
              GET STARTED
            </button>
          </div>
        </div>

        <div className="topBoxImg"></div>
      </div>
      {/* <div className="wave2"></div> */}
      {/* <div className='colorBox'></div> */}
      <div className="topBox2">
        <div className="infoBox" id="infoBox1">
          <div className="circle">1000+</div>
          <div className="infotext">Questions</div>
        </div>
        <div className="infoBox" id="infoBox2">
          <div className="circle">3</div>
          <div className="infotext">Categories</div>
        </div>
        <div className="infoBox" id="infoBox3">
          <div className="circle">30+</div>
          <div className="infotext">Sub-topics</div>
        </div>
      </div>

      {/* get stated heding */}
      <div id='getStartHeadingCont'>
        <div id='getStartHeadingbox'>
          {/* <span>T</span>ime <span>T</span>o <span>S</span>tart */}
          Time to Start
        </div>
      </div>
    </div>
  )
}

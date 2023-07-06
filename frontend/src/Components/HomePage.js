import React from 'react'
import TopPage from './Home pages/TopPage'
import QuesContPage from './Home pages/QuesContPage'
import ReviewPage from './Review/ReviewPage'
import BeautifullPage1 from './beautiful Pages/BeautifulPage1'
import FooterPage from './footer/FooterPage'


export default function HomePage() {
  return (
    <div>
      <TopPage/>
      <QuesContPage/>
      <ReviewPage/>
      <BeautifullPage1/>
      <FooterPage/>
    </div>
  )
}

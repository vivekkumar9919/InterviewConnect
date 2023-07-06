import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Link } from 'react-router-dom'

export default function AdminDashboard() {
  return (
    <div className='AdminCont'>
        <div className="homeBtn"><Link className="Link" to="/">Home <i class="fa fa-home"></i></Link></div>
        <h1 className='adminHeading'>Admin Dashboard</h1>
        <AdminNavbar/>
    </div>
  )
}

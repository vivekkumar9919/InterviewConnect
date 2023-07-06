import React from 'react'
import {Link,Outlet} from 'react-router-dom'

export default function AdminNavbar() {
  return (
    <>
    <div className='adminNavCont'>
        <div className="navElement" id="getData"><Link className="Link" to="/admin">Get Data</Link></div>
        <div className="navElement" id="postData"><Link className="Link" to="/admin/post">Post Data</Link></div>
        {/* <div className="navElement" id="updateData"><Link to="/admin/update">Update Data</Link></div>
        <div className="navElement" id="deleteData"><Link to="/admin/delete">Delete Data</Link></div> */}
        <div className="navElement" id="fetchfeedback"><Link className="Link" to="/admin/fetchfeedback">Fetch Feedback Data</Link></div>
    </div>
    <Outlet/>
    </>
  )
}

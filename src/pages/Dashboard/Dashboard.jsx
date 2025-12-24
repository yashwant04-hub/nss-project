import React from 'react'
import './Dashboard.css'
import { NavLink } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Navbar_left from '../../components/Navbar_left/Navbar_left'
import Calendar from '../../components/Calendar/Calendar'

const Dashboard = () => {
  return (
    <div className="dashboard_main">
      <Navbar route="/"/>
      <div className="dashboard_content">
        <div className="dashboard_content_left">
          <Navbar_left/>
        </div>

        <div className="dashboard_content_right">
          <Calendar/>  
        </div>
      </div>

        

    </div>
  )
}

export default Dashboard
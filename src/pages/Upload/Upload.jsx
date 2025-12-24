import React from 'react'
import "./Upload.css"
import Navbar from '../../components/Navbar/Navbar'
import Navbar_left from '../../components/Navbar_left/Navbar_left'

const Upload = () => {
  return (
    <div className="upload_main">
        <div className="upload_up">
            <Navbar route="/Dashboard"/>
        </div>
        <div className="upload_down">
            <div className="upload_down_left">
            <Navbar_left/>
            </div>
            <div className="upload_down_right">
                This is the right portion
            </div>
        </div>
    </div>
  )
}

export default Upload
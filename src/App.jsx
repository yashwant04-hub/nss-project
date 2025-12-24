import React from 'react'
import { Route , Routes } from 'react-router-dom'

import Home from "./pages/Home/Home.jsx"
import Login from "./pages/Login/Login.jsx"
import Registerstudent from "./pages/Register/Registerstudent.jsx"
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Instructions from './pages/Instructions/Instructions.jsx'
import Exam from './pages/Exam/Exam.jsx'
import Teachers from './pages/Teachers/Teachers.jsx'
import Students from './pages/Students/Students.jsx'
import Performance from './pages/Performance/Performance.jsx'
import Teacherregister from './pages/Teacherregister/Teacherregister.jsx'
import Upload from './pages/Upload/Upload.jsx'

const App = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Registerstudent" element={<Registerstudent/>}/> 
        <Route path="/Teacherregister" element={<Teacherregister/>}/> 
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Instructions" element={<Instructions/>}/>
        <Route path="/Exam" element={<Exam/>}/>
        <Route path="/Teachers" element={<Teachers/>}/>
        <Route path="/Students" element={<Students/>}/>
        <Route path="/Performance" element={<Performance/>}/>
        <Route path="/Upload" element={<Upload/>}/>
      </Routes>
    </div>
  )
}

export default App
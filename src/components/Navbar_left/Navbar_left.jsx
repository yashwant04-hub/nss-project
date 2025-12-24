import React from 'react'
import './Navbar_left.css'
import { NavLink } from 'react-router-dom'

const Navbar_left = () => {
  return (
    <div className="main_content_left">
                        <div className="profile_picture">
                            <div className="dashboard_profile_photo">
                                
                            </div>
                            <div className="student_name">
                                <h3>Student's Name</h3>
                            </div>
                        </div>
        
                        <div className="dashboard_navlink_container">
                        <NavLink className="dashboard_navlink" to="/teachers">
                        <div className="performance">

                        <div className="performance_svg_container">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.4998 5.49994L18.3282 8.32837M3 20.9997L3.04745 20.6675C3.21536 19.4922 3.29932 18.9045 3.49029 18.3558C3.65975 17.8689 3.89124 17.4059 4.17906 16.9783C4.50341 16.4963 4.92319 16.0765 5.76274 15.237L17.4107 3.58896C18.1918 2.80791 19.4581 2.80791 20.2392 3.58896C21.0202 4.37001 21.0202 5.63634 20.2392 6.41739L8.37744 18.2791C7.61579 19.0408 7.23497 19.4216 6.8012 19.7244C6.41618 19.9932 6.00093 20.2159 5.56398 20.3879C5.07171 20.5817 4.54375 20.6882 3.48793 20.9012L3 20.9997Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </div>
                                Instructors
                        </div>
                        </NavLink>
        
                        <NavLink className="dashboard_navlink" to="/instructions">
                        <div className="performance">
                                <div className="performance_svg_container">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 29V26H13V29H10Z" fill="#ffffff"></path> <path fillRule="evenodd" clipRule="evenodd" d="M32 44H8C5.79086 44 4 42.2091 4 40V8C4 5.79086 5.79086 4 8 4H32C34.2091 4 36 5.79086 36 8V40C36 42.2091 34.2091 44 32 44ZM18 13C18 12.4477 18.4477 12 19 12H31C31.5523 12 32 12.4477 32 13C32 13.5523 31.5523 14 31 14H19C18.4477 14 18 13.5523 18 13ZM19 16C18.4477 16 18 16.4477 18 17C18 17.5523 18.4477 18 19 18H31C31.5523 18 32 17.5523 32 17C32 16.4477 31.5523 16 31 16H19ZM15.7071 12.2929C16.0976 12.6834 16.0976 13.3166 15.7071 13.7071L11 18.4142L8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929C8.68342 13.9024 9.31658 13.9024 9.70711 14.2929L11 15.5858L14.2929 12.2929C14.6834 11.9024 15.3166 11.9024 15.7071 12.2929ZM19 24C18.4477 24 18 24.4477 18 25C18 25.5523 18.4477 26 19 26H31C31.5523 26 32 25.5523 32 25C32 24.4477 31.5523 24 31 24H19ZM18 29C18 28.4477 18.4477 28 19 28H31C31.5523 28 32 28.4477 32 29C32 29.5523 31.5523 30 31 30H19C18.4477 30 18 29.5523 18 29ZM14 24H9C8.44772 24 8 24.4477 8 25V30C8 30.5523 8.44772 31 9 31H14C14.5523 31 15 30.5523 15 30V25C15 24.4477 14.5523 24 14 24Z" fill="#ffffff"></path> <path fillRule="evenodd" clipRule="evenodd" d="M44 40L41 44L38 40V22H44V40Z" fill="#ffffff"></path> <path fillRule="evenodd" clipRule="evenodd" d="M40 15H42C43.1046 15 44 15.8954 44 17V21H38V17C38 15.8954 38.8954 15 40 15Z" fill="#ffffff"></path> </g></svg>
                                </div>
                                Take test                  
                        </div>
                        </NavLink>
        
                        <NavLink className="dashboard_navlink" to="/performance">
                        <div className="performance">
                                <div className="performance_svg_container">
                                <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <path className="st0" d="M510.159,392.023l-45.586-57.326V93.61c0-11.662-9.458-21.121-21.121-21.121H68.539 c-11.662,0-21.111,9.458-21.111,21.121v241.087L1.834,392.023C0.64,393.518,0,395.368,0,397.288v25.373 c0,9.311,7.539,16.849,16.841,16.849h478.31c9.302,0,16.849-7.538,16.849-16.849v-25.373 C512,395.368,511.351,393.518,510.159,392.023z M77.219,102.29h357.554v202.607H77.219V102.29z M304.119,419.472h-96.238v-25.478 h96.238V419.472z" fill="#ffffff"></path> <rect x="132.064" y="245.315" className="st0" width="35.41" height="35.41" fill="#ffffff"></rect> <rect x="185.179" y="209.904" className="st0" width="35.41" height="70.821" fill="#ffffff"></rect> <rect x="238.295" y="192.199" className="st0" width="35.41" height="88.526" fill="#ffffff"></rect> <rect x="291.41" y="139.084" className="st0" width="35.41" height="141.642" fill="#ffffff"></rect> <rect x="344.526" y="174.494" className="st0" width="35.41" height="106.231" fill="#ffffff"></rect> </g> </g></svg>
                                </div>                           
                                Performance                        
                        </div>
                        </NavLink>

                        <NavLink className="dashboard_navlink" to="/students">
                        <div className="performance">
                                <div className="performance_svg_container">
                                <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>profile [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -2159.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M134,2008.99998 C131.783496,2008.99998 129.980955,2007.20598 129.980955,2004.99998 C129.980955,2002.79398 131.783496,2000.99998 134,2000.99998 C136.216504,2000.99998 138.019045,2002.79398 138.019045,2004.99998 C138.019045,2007.20598 136.216504,2008.99998 134,2008.99998 M137.775893,2009.67298 C139.370449,2008.39598 140.299854,2006.33098 139.958235,2004.06998 C139.561354,2001.44698 137.368965,1999.34798 134.722423,1999.04198 C131.070116,1998.61898 127.971432,2001.44898 127.971432,2004.99998 C127.971432,2006.88998 128.851603,2008.57398 130.224107,2009.67298 C126.852128,2010.93398 124.390463,2013.89498 124.004634,2017.89098 C123.948368,2018.48198 124.411563,2018.99998 125.008391,2018.99998 C125.519814,2018.99998 125.955881,2018.61598 126.001095,2018.10898 C126.404004,2013.64598 129.837274,2010.99998 134,2010.99998 C138.162726,2010.99998 141.595996,2013.64598 141.998905,2018.10898 C142.044119,2018.61598 142.480186,2018.99998 142.991609,2018.99998 C143.588437,2018.99998 144.051632,2018.48198 143.995366,2017.89098 C143.609537,2013.89498 141.147872,2010.93398 137.775893,2009.67298" id="profile-[#ffffff]"> </path> </g> </g> </g> </g></svg>
                                </div>
                                Profile
                        </div>
                        </NavLink>

                        <NavLink className="dashboard_navlink" to="/upload">
                                <div className="performance">
                                        <div className="performance_svg_container">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 17H17.01M15.6 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H8.4M12 15V4M12 4L15 7M12 4L9 7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                        </div>
                                        Upload Questions
                                </div>
                        </NavLink>
        
                        </div>
         
                        
                    </div>
  )
}

export default Navbar_left
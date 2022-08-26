import React from 'react'
import NavOne from '../components/templates/NavOne/NavOne'
import Topbar from '../components/templates/TopBar/TopBar'
import user from '../components/images/Nurlan.jpg'
import VerticalTabs from '../components/templates/UserPanel/VerticalTabs'
import './UsersPage.css';
import { Link } from 'react-router-dom'

function UsersPage() {
  return (
    <div>
        {/* <Topbar/> */}
        {/* <NavOne /> */}
        <div className='topUserBlock'>
            <div className='UserBlock' style={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
                <div className='userInlinePanel'>
                    <img className='UserAvatar' src={user}/>
                    <div className='UserName'>
                        <span className='UserHello'>Salom</span>
                        <h5>Nurlan<br/> Qarshiyev</h5>
                    </div>
                </div>
                {/* <div className='adminPage' style={{display: "flex", marginTop:"60px"}}>
                    <div className='leftPanel' style={{width: "25%", height:"100vh", border:"10px solid red"}}>
                        <div>
                            <ul>
                                <li>Mening kurslarim</li>
                                <li>Barcha kurslar</li>
                                <li>Tolovlar</li>
                                <li>Yoqqan kurslar</li>
                                <li>Xaridlar tarihi</li>
                                <li>Savol javob</li>
                                <hr/>
                                <li>Sozlamalar</li>
                                <li>Chiqish</li>
                            </ul>
                        </div>
                    </div>
                    <div className='rightPanel' style={{width: "75%", height:"100vh", border:" 10px solid blue"}}>s</div>
                </div> */}
                  <h2> <Link to="/" className="thm-btn thm-btn-n">Chiqish</Link></h2>
            </div>
          
        </div>
        <hr/>
          <VerticalTabs/>
      
    </div>
  )
}

export default UsersPage

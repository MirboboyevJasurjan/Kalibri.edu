import React from 'react'
import NavOne from '../components/templates/NavOne/NavOne'
import Topbar from '../components/templates/TopBar/TopBar'
import user from '../components/images/Nurlan.jpg'
import VerticalTabs from '../components/templates/UserPanel/VerticalTabs'
import './UsersPage.css';
import { Link } from 'react-router-dom'
import Footer from '../components/templates/Footer/Footer'

function UsersPage() {
  return (
    <div>
     
        <div className='topUserBlock'>
            <div className='UserBlock' style={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
                <div className='userInlinePanel'>
                    <img className='UserAvatar' src={user}/>
                    <div className='UserName'>
                        <span className='UserHello'>Salom</span>
                        <h5>Nurlan<br/> Qarshiyev</h5>
                    </div>
                </div>
               
                  <h2> <Link to="/" className="thm-btn thm-btn-n">Chiqish</Link></h2>
            </div>
          
        </div>
        <hr/>
          <VerticalTabs className="verticalTabs"/>
      
    </div>
  )
}

export default UsersPage

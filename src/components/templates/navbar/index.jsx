import React from 'react'
import { Link } from 'react-router-dom'
import './main.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function index() {
  
    return (
        <div className='nav_header'>
            
            <div className='header_1'>
                <div className='header_nav22'>
                    <div className="header_left">
                        <Link className='link_kalibri' to="#">  kalibri.online@gmail.com </Link>
                        <Link className='link_kalibri' to="#">  71 200 57 00 </Link>
                    </div>
                    <div className='header_right'>
                        <button className='btn_loginR'>Login</button>
                        <button className='btn_loginR'>Registr</button>
                    </div>
                </div>
            </div>

            <div className='navbar '>

                <div className='nav_left'>
                    <p className='logo'> LOGO</p>
                    <ul>
                        <li> <Link href="#"> <InstagramIcon className='link_i' /> </Link> </li>
                        <li> <Link href="#"> <FacebookIcon className='link_i' /> </Link> </li>
                        <li> <Link href="#"> <InstagramIcon className='link_i' /> </Link> </li>
                        <li> <Link href="#"> <YouTubeIcon className='link_i' /> </Link> </li>
                    </ul>
                </div>

                <div className='nav_right'>
                    <ul className='nr_right'>
                        <li><Link className='links' href="#"> Bosh sahifa </Link></li>
                        <li><Link className='links' href="#"> Kurslar </Link></li>
                        <li><Link className='links' href="#"> Ustozlar </Link></li>
                        <li><Link className='links' href="#"> Yangiliklar </Link></li>
                        <li><Link className='links' href="#"> Kontaktlar </Link></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

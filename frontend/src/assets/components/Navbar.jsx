import React, { useState } from 'react'
import logo from '../images/logo.png'
import avatar from '../images/pic-1.jpg'
import style from './css/navbar.module.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const [name, setName] = useState("Yagnesh")
    return (
        <>

            <div className={style.container}>

                <img src={logo} alt="Logo" />

                <div className={style.navlinks}>
                    <ul className={style.navlinks}>
                        <NavLink to={'/'}>
                            <li><a href="#">Home</a></li>
                        </NavLink>
                        <NavLink to={'/timetable'}>
                            <li><a href="#">Timetable</a></li>
                        </NavLink>
                        <li><a href="#">Examinations</a></li>
                        <li><a href="#">Change Password</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
            <div className={style.sidebar}>
                <div className={style.profile}>
                    <img src={avatar} alt="" />
                    <h3>{name}</h3>
                    <p>Student</p>
                    <a href="#" className={style.btn}>View Profile</a>
                </div>
                <div class={style.nav}>
                    <a href="index.html"><i className="fas fa-home"></i><span>home</span></a>

                    <a href="#timetable"><i className="fas fa-graduation-cap"></i><span>Timetable</span></a>
                    <a href="#"><i className="fas fa-chalkboard-user"></i><span>teachers</span></a>

                </div>
            </div >

        </>
    )
}

export default Navbar

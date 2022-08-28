import '../styles/Banner.css'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/icon-left-font.svg'

function Banner() {
    // return <div className='banner'>{ children }</div>
    return (
    <nav>
        <ul>
            <li>
                <Link to='/'><img src={logo} alt='Groupomania' className='logo' /></Link>
            </li>
            <li>
                <Link to='/login'>LOG IN</Link>
            </li>
            <li>
                <Link to='/signup'>SIGN UP</Link>
            </li>
        </ul>
    </nav>
    )
}

// si user pas log : Logo, bouton "Log In" => page de connexion, bouton "Inscription" => page d'inscription
// si user log : Logo, bouton "New Post" => page de création de post, bouton "Log Out"

export default Banner
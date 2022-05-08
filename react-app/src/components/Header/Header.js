import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss';

 function Header() {
  return (
    <div className='main-header'>
        <div className='main-header-container'>
            <Link to='/'><div className='logo'>NEWS.</div></Link>
            <div className='main-header-container-link'>
            <Link to='/'>Lajme</Link>
            <Link to='/sport'>Sport</Link>
            </div>
        </div>
    </div>
  )
}
export default Header;
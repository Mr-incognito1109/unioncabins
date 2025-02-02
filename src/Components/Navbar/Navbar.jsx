import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo_uc_v3.png';
import menu_icon from '../../assets/menu.png';
import { Link } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const [mobileMenu,setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <RouterLink to="/"><img src={logo} alt='Union Cabins Logo' className='logo' /></RouterLink>
      <ul className={mobileMenu ?'' : 'hide-mobile-menu'}>
        {isHomePage ? (
          <>
            <li><Link to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" spy={true} smooth={true} duration={500}>About</Link></li>
            <li><Link to="products" spy={true} smooth={true} duration={500}>Products</Link></li>
            <li><RouterLink to="/gallery">Gallery</RouterLink></li>
            <li><Link to="contact" spy={true} smooth={true} duration={500} className='btn'>Contact</Link></li>
          </>
        ) : (
          <>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/products">Products</RouterLink></li>
            <li><RouterLink to="/gallery">Gallery</RouterLink></li>
            <li><RouterLink to="/contact" className='btn'>Contact</RouterLink></li>
          </>
        )}
      </ul>
      <img src={menu_icon} className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
import React, { useEffect, useRef, useState } from 'react'
import Logo from '../assets/Images/Icons/Blacklogo.png'
import { Box, Drawer } from '@mui/material'
import { Link } from 'react-router-dom'

//Icon
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
    const [NavControl, setNavControl] = useState(false)
    const [NavScroll, setNavScroll] = useState(false);

const scrollToTarget = (target, offset = 100) => {
  console.log(target);
  const element = document.getElementById(target);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
      
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
            setNavScroll(true)
        } else {
            setNavScroll(false)
        }
      };

  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup function to remove the event listener
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
        <div>
            <Box sx={{ display: { sm: "block", xs: "none" } }}>
                <div id='NavBarMain' style={{ backgroundColor: NavScroll ? '#1e1d1f' : 'transparent' }} >
                    <img id='LogoImg' src={Logo} alt="Logo" />
                    <div id='NavItems'>
                        <Link to="#" onClick={() => scrollToTarget('HomeMain')}><h4 className={NavScroll ? 'darkscroll': 'noscroll'} id="NavItem">Home</h4></Link>
                        <Link to="#" onClick={() => scrollToTarget('Service',40)}><h4 className={NavScroll ? 'darkscroll': 'noscroll'} id="NavItem">Solutions</h4></Link>
                        <Link to="#" onClick={() => scrollToTarget('Aim',60)}><h4 className={NavScroll ? 'darkscroll': 'noscroll'} id="NavItem">Aim</h4></Link>
                        <Link to="#" onClick={() => scrollToTarget('contact',30)}><h4 className={NavScroll ? 'darkscroll': 'noscroll'} id="NavItem">Contact Us</h4></Link>
                        <Link to="#" onClick={() => scrollToTarget('contact',30)}><h4 style={{ background: NavScroll ? 'black' : 'black' , color: NavScroll ? 'white' : 'white'}} id="Navbtn">Get Proposal</h4></Link>
                    </div>
                </div>
            </Box>
            <Box sx={{ display: { sm: "none", xs: "block" } }}>
                <div id='PhoneNav' >
                    <Link className='Link' to="/"><img id="LogoImg" src={Logo} alt="logo" /></Link>
                    <MenuIcon id="menuicon" onClick={e => (setNavControl(true))} />
                </div>
            </Box>
            <Drawer
                anchor={'left'}
                open={NavControl}
                onClose={e => (setNavControl(false))} >
                <div style={{padding:'10%',width:"250px",zIndex:1000}}>
                    <div id='SideBarFirstPart' style={{ display: "flex" }}>
                        <Link className='Link' to="/"><img src={Logo} id="LogoImg" onClick={e => (setNavControl(false))} alt="logo" /></Link>
                        <CloseIcon id="closeicon" onClick={e => (setNavControl(false))} />
                    </div>
                    <div id='SideBarContainer'>
                    <Link to="#" onClick={() =>{scrollToTarget('HomeMain'),setNavControl(false)}}><h4 id="NavItem">Home</h4></Link>
                        <Link to="#"  onClick={() =>{scrollToTarget('Service',40),setNavControl(false)}}><h4 id="NavItem">Solutions</h4></Link>
                        <Link to="#" onClick={() =>{scrollToTarget('Aim',60),setNavControl(false)}}><h4 id="NavItem">Aim</h4></Link>
                        <Link to="#" onClick={() =>{scrollToTarget('contact',30),setNavControl(false)}}><h4 id="NavItem">Contact Us</h4></Link>
                        <Link to="#" onClick={() =>{scrollToTarget('contact',30),setNavControl(false)}}><h4 style={{marginTop:"20%"}}  id="Navbtn">Get Proposal</h4></Link>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default NavBar

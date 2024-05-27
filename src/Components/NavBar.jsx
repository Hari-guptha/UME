import React, { useEffect, useState } from 'react'
import Logo from '../assets/Images/Icons/Blacklogo.png'
import { Box, Drawer } from '@mui/material'
import { Link } from 'react-router-dom'

//Icon
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
    const [NavControl, setNavControl] = useState(false)
    const [NavScroll, setNavScroll] = useState(false);

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
                <div id='NavBarMain' style={{ backgroundColor: NavScroll ? 'black' : 'transparent' }} >
                    <img id='LogoImg' src={Logo} alt="Logo" />
                    <div id='NavItems'>
                        <Link to="#"><h4 className={NavScroll ? 'darkscroll': 'noscroll'} id="NavItem">Home</h4></Link>
                        <Link to="#"><h4 className={NavScroll ? 'darkscroll': 'noscroll'} id="NavItem">Solutions</h4></Link>
                        <Link to="#"><h4 className={NavScroll ? 'darkscroll': 'noscroll'} id="NavItem">About Us</h4></Link>
                        <Link to="#"><h4 className={NavScroll ? 'darkscroll': 'noscroll'} id="NavItem">Contact Us</h4></Link>
                        <Link to="#"><h4 style={{ background: NavScroll ? '#1E1D1F' : 'black' , color: NavScroll ? 'white' : 'white'}} id="Navbtn">Get Proposal</h4></Link>
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
                <div style={{padding:'10%',width:"250px"}}>
                    <div id='SideBarFirstPart' style={{ display: "flex" }}>
                        <Link className='Link' to="/"><img src={Logo} id="LogoImg" onClick={e => (setNavControl(false))} alt="logo" /></Link>
                        <CloseIcon id="closeicon" onClick={e => (setNavControl(false))} />
                    </div>
                    <div id='SideBarContainer'>
                    <Link to="#"><h4 id="NavItem">Home</h4></Link>
                        <Link to="#"><h4 id="NavItem">Solutions</h4></Link>
                        <Link to="#"><h4 id="NavItem">About Us</h4></Link>
                        <Link to="#"><h4 id="NavItem">Contact Us</h4></Link>
                        <Link to="#"><h4 style={{marginTop:"20%"}}  id="Navbtn">Get Proposal</h4></Link>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default NavBar

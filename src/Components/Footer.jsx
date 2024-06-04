import React from 'react'
import Logo from '../assets/Images/Icons/Blacklogo.png'
import Linkdinicon from '../assets/Images/Icons/Linkdin.svg'
import Whatsapp from '../assets/Images/Icons/whatsapp.svg'
import FaceBook from '../assets/Images/Icons/Facebook.svg'

const Footer = () => {
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
    return (
        <>
            <div id='footersuper' style={{ display: "flex", justifyContent: "space-between", padding: "5% 10%" }}>
                <div id='FooterMain'>
                    <img id='LogoImg' src={Logo} alt="Logo" />
                    <h5>To enjoy the AI journey over competing in the AI race.</h5>
                </div>
                <div id='FooterLinks'>
                    <h5 onClick={() => scrollToTarget('HomeMain')}>Home</h5>
                    <h5 onClick={() => scrollToTarget('Service',40)}>Solutions</h5>
                    <h5 onClick={() => scrollToTarget('Aim',60)}>Aim</h5>
                    <h5 onClick={() => scrollToTarget('contact',30)}>Contact Us</h5>
                </div>
                <div>
                    <h5 id='footerbtn' onClick={() => scrollToTarget('contact',30)}>Get Proposal</h5>
                    <h6 id='socialicons'>Social Media</h6>
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <img id='footericon' src={Linkdinicon} alt="linkdin" />
                            <img id='footericon' src={Whatsapp} alt="Whatsapp" />
                            <img id='footericon' src={FaceBook} alt="Facebook" />
                        </div>
                    </div>
                </div>
            </div>
            <h5 id='rr'>@All Rights Reserved By UME</h5>
        </>
    )
}

export default Footer

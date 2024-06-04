import { Height } from '@mui/icons-material'
import React from 'react'
import service from '../assets/Images/area.png'
import Equation from '../assets/Images/Equation.png'
import Area from '../assets/Images/sector.png'
import { Tilt } from 'react-tilt'

const Home = () => {

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
            <div id='HomeMain'>
                <h5>Empowering young minds to craft innovative solutions tailored to your <span style={{ color: "#0565FF" }}>project's </span><span style={{ color: "#FF00BF" }}>vision</span></h5>
                <div style={{ display: "flex", justifyContent: "center" }}>
                        <h4 id='HomeBtn' onClick={() => scrollToTarget('Service',40)}>Get Started</h4>
                </div>
                <a href="#" onClick={() => scrollToTarget('Service',40)}>
                    <div id="mouse-scroll">
                        <div class="mouse">
                            <div class="mouse-in"></div>
                        </div>
                        <div>
                            <span class="down-arrow-1"></span>
                            <span class="down-arrow-2"></span>
                            <span class="down-arrow-3"></span>
                        </div>
                    </div>
                </a>
            </div>
            <div id='Service'>
                <h4 id='Title'>Simplicity meets power</h4>
                <h5 id='SubTitle'>We create software, provide IT services, and offer cloud solutions that are powerful and easy to use.</h5>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img id='serviceimg' src={service} alt="service" />
                </div>
            </div>
            <div id='Aim'>
                <h4 id='Title'>Our Aim</h4>
                <h5 id='SubTitle'>We are here to deliver a future where AI integrates with every business by offering cloud-based solutions that are tailor-made to meet the distinct requirements of each client.</h5>
                <div id='AimCards'>
                    <div id='AimCard'>
                        <h4 style={{ color: "#D482F0" }}>Hold in high regard our clients</h4>
                        <h5>Our morals don't shift between the affluence of the clients. All clients are treated with respect irrespective of their background, size, or budget. We believe in honoring the dignity and worth of every individual and organization we serve, fostering a culture of inclusivity, fairness, and mutual respect in all our interactions.</h5>
                    </div>
                    <div id='AimCard'>
                        <h4 style={{ color: "#58B4F7" }}>Responsibility</h4>
                        <h5>We always take responsibility for what we do. We promise to communicate openly, deliver on our commitments, and admit when we're wrong. This builds trust with everyone we work with and helps us get better all the time.</h5>
                    </div>
                    <div id='AimCard'>
                        <h4 style={{ color: "#81F078" }}>Forever Curious</h4>
                        <h5>We believe in constant learning, essential for growth. Curiosity, exploration, and personal development are key. By promoting lifelong learning, we enable our team to adapt, innovate, and excel. Through ongoing education, we enhance our skills to deliver value to clients.</h5>
                    </div>
                </div>
            </div>
            <div id='Equation'>
                <h4 id='Title'>Our Innovation Equation</h4>
                <h5 id='SubTitle'>An unorthodox group of innovators with an abnormal thirst for excellence.
                    We don't refer our clients as customers we address them as allies</h5>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img id='Equationimg' src={Equation} alt="equation" />
                </div>
            </div>
            <div id='Area'>
                <div id='sector-bg'>
                    <h4 id='Title'>Service Spectrum</h4>
                    <h5 id='SubTitle'>An unorthodox group of innovators with an abnormal thirst for excellence.
                        We don't refer our clients as customers we address them as allies</h5>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img id='Areaimg' src={Area} alt="equation" />
                    </div>
                </div>
            </div>
            <div id='Choose'>
                <h4 id='Title'>Why Choose Us</h4>
                <h5 id='SubTitle'>Experience a customer-centric approach that places your needs and priorities at the forefront of everything we do. Your success is our success, and we are dedicated to delivering solutions that help you achieve your business objectives.</h5>
                <div id='supercontent'>
                    <div id='chus'>
                        <h5>Continuous Innovation</h5>
                        <h6>Partner with a company that is at the forefront of innovation. We continuously explore new technologies, methodologies, and strategies to drive continuous improvement and stay ahead of the curve.</h6>
                    </div>
                    <div id='chus'>
                        <h5>Commitment to Excellence</h5>
                        <h6>Experience a commitment to excellence in every aspect of our service delivery. From initial consultation to ongoing support, we strive for nothing less than exceptional quality and customer satisfaction.</h6>
                    </div>
                    <div id='chus'>
                        <h5>Transparent Communication</h5>
                        <h6>Enjoy open and transparent communication throughout the project lifecycle. We keep you informed every step of the way, providing clarity, updates, and insights to ensure alignment with your goals and expectations.</h6>
                    </div>
                </div>
            </div>
            <div id='contact'>
                <h4 id='Title'>Contact US</h4>
                <h5 id='SubTitle'>Benefit from the expertise of our team of fresh minds who possess a deep understanding of AI, cloud technology, and emerging trends in the digital landscape.</h5>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <form action="/Contact" method="post" id='ContactForm'>
                        <h5>Name</h5>
                        <input type="text" placeholder='Enter your name' />
                        <h5 style={{ marginTop: "20px" }}>Email</h5>
                        <input type="text" placeholder='Enter your Email' />
                        <h5 style={{ marginTop: "20px" }}>Comment</h5>
                        <input type="text" placeholder='Enter your Comment' />
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <h5 id='contactbtn'>Submit</h5>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home

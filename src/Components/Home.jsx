import { Height } from '@mui/icons-material'
import React from 'react'
import service from '../assets/Images/area.png'
import Equation from '../assets/Images/Equation.png'
import Area from '../assets/Images/sector.png'


const Home = () => {
    return (
        <>
            <div id='HomeMain'>
                <h5>Empowering young minds to craft innovative solutions tailored to your <span style={{ color: "#0565FF" }}>project's </span><span style={{ color: "#FF00BF" }}>vision</span></h5>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <h4 id='HomeBtn'>Get Started</h4>
                </div>
                <a href="#">
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
                <h4 id='Title'>Our Innovation Equation</h4>
                <h5 id='SubTitle'>An unorthodox group of innovators with an abnormal thirst for excellence.
                    We don't refer our clients as customers we address them as allies</h5>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img id='Areaimg' src={Area} alt="equation" />
                </div>
            </div>
        </>
    )
}

export default Home

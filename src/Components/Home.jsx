import { Height } from '@mui/icons-material'
import React from 'react'

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
        </>
    )
}

export default Home

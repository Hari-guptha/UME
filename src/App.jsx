import { Route, Routes } from "react-router-dom"
import "./assets/Css/Main.Css"
import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<>
          <div style={{ textAlign: 'center', padding: '50px', margin: "20% 0" }}>
            <h2>Something went wrong.</h2>
            <p>The page encountered an error and cannot be displayed.</p>
          </div></>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

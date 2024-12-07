import React from "react";
import Navbar from "./Navbar";
import './Home.css'
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";


function Home(){
    return(
        <>
          <Navbar/>
          <div className="box"><div className="img">
            <img src="	https://preview.colorlib.com/theme/tailor/assets/img/hero/hero-icon.png" alt="" /></div>
            <div className="text_1"><h1>About Us</h1></div>
            <div className="img2"><img src="https://preview.colorlib.com/theme/tailor/assets/img/hero/h2_hero2.png" alt="" /></div>
            <div className="img3"><img src="https://preview.colorlib.com/theme/tailor/assets/img/gallery/visit_bg.png" alt="" /></div>
            <div className="box2"></div>
            <div className="text_2"><h1>About our <br /> tailor house</h1></div>
            <div className="text_3"><span>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Suspendisse varius enim in eros.</span></div>
            <div className="text_4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Suspendisse varius enim in eros elementum tristique. Duis <br /> cursus, mi quis viverra ornare.</div>
             <div className="btn"><button>MORE ABOUT US</button></div>
            </div>
            <About/>
            <Blog/>
            <Contact/>
        </>
    )
}
export default Home
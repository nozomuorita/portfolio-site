import React from 'react'
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import profileImage from "../Images/sibainu.jpg";
//import video from '../assets/skyscrapers_-_98151 (720p).mp4';
// import video from '../../public /skyscrapers_-_98151 (720p).mp4';
import video from '../../public/skyscrapers_-_98151 (720p)-24b0a77a.mp4'
import portfolio1 from "../assets/portfolio/1.jpg";
import portfolio2 from "../assets/portfolio/2.jpg";
import portfolio3 from "../assets/portfolio/3.jpg";
import portfolio4 from "../assets/portfolio/4.jpg";
import portfolio5 from "../assets/portfolio/5.jpg";
import portfolio6 from "../assets/portfolio/6.jpg";
// import fig1 from "../assets/portfolio/fig1.png";
import highschool from "../../public/high-school.jpg"
import fig1 from "../assets/portfolio/portfolio1.png";
import abacus from "../assets/qualification/abacus.jpg";
import kanken from "../assets/qualification/kanken.gif";
import eiken from "../assets/qualification/eiken.jpg";
import toeic from "../assets/qualification/toeic.jpeg";
import g from "../assets/qualification/g.png";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Portfolio from './section/Portfolio'
import Skill from "./section/skill"
import qualification from "./section/Qualification"
import Qualification from './section/Qualification';
import About from "./section/About";
import Contact from "./section/Contact";
import Footer from "./section/Footer";

import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

function HomePage() {
  return (
    <>
      <header class="masthead" id='top'>
        <video autoPlay loop muted playsInline className='video'>
          <source src={video} type='video/mp4' />
        </video>

        <div class="container title-text">
          <div class="masthead-subheading">Welcome To My PortFolio</div>
          <div class="masthead-heading text-uppercase">NOZOMU ORITA</div>
          {/* <button class='header-btn text-uppercase' href='#skill'><a>Tell me more</a></button> */}
          <a class="btn btn-primary btn-xl text-uppercase" href="#about">Tell Me More</a>
        </div>
      </header>

      <div className='overlay'></div>
    
        
        <About />
        <Portfolio />
        <Qualification />
        <Skill />        
        
        

        <Contact />
        <Footer />





























        {/* <!-- Portfolio Modals-->
        <!-- Portfolio item 1 modal popup--> */}
        {/* <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">

                                    <h2 class="text-uppercase">Project Name</h2>
                                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/1.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Threads
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Illustration
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}



    </>  
  )
}

export default HomePage
HomePage
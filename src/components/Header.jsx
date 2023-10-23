import React from 'react'
import { Link } from 'react-router-dom';
import logoImage from "../../public/Planet Arcadia (1)_1.png";
import audiosource from "../../public/audio.mp3";

import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


//const music = new Audio('../src/assets/TheFatRat - Windfall (online-audio-converter.com).mp3');
// const music = new Audio("../src/assets/audio.mp3");
const music = new Audio(audiosource);
//const music = new Audio(<audio />)

const AudioPlay = () => {
    const play = document.getElementById('play');

    if(!music.paused){
    music.pause();
    }else{
    music.play();
    }
}

const Header = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#top"><img className='logo' src={logoImage} /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li class="nav-item"><a class="nav-link" href="#top">TOP</a></li>
                        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
                        
                        <li class="nav-item"><a class="nav-link" href="#qualifications">Qualifications</a></li>
                        <li class="nav-item"><a class="nav-link" href="#skill">SKILL</a></li>
                        
                        <li class="nav-item"><a class="nav-link" href="#account">Account</a></li>
                        <a className='music-button' id='play' onClick={AudioPlay}><LibraryMusicIcon fontSize='large' className='music-icon'/></a>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header

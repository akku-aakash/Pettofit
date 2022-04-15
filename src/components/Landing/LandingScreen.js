import React, { useEffect, useRef } from 'react';
import './landingscreen.css'
import Img1 from '../../Assests/landingscreen/dkk1.png'
// import Img2 from '../Assests/landingscreen/hee1.png'
import { TweenMax, Expo } from "gsap";

const LandingScreen = () => {
    let first = useRef(null);
    let second = useRef(null);
    let third = useRef(null);

    useEffect(() => {
        TweenMax.to(first.current, 1.5, {
            delay: 0.1,
            left: "-100%",
            ease: Expo.easeInOut,
        });

        TweenMax.to(second.current, 1.5, {
            delay: 0.2,
            left: "-100%",
            ease: Expo.easeInOut,
        });

        TweenMax.to(third.current, 1.5, {
            delay: 0.3,
            left: "-100%",
            ease: Expo.easeInOut,
        });
    }, [])

    const chagnerotation = () => {
        if (window.innerWidth > 860) {
            if (window.scrollY > 670) {
                const navlinkss = document.querySelector(".landing-sc-begin2");
                const navlinks = document.querySelector(".landing-sc-begin2-min-max");
                const navlinkkk = document.querySelector('.landing-sc-begin2-min')
                if (navlinks && navlinkss) {
                    navlinkss.classList.add("landing-sc-begin2-exit");
                    navlinks.classList.add("landing-sc-begin2-min-max-exit");
                    navlinkkk.classList.add("landing-sc-begin2-min-exit")
                }
            }
            if (window.scrollY <= 670) {
                const navlinkss = document.querySelector(".landing-sc-begin2");
                const navlinks = document.querySelector(".landing-sc-begin2-min-max");
                const navlinkkk = document.querySelector('.landing-sc-begin2-min')
                if (navlinks && navlinkss) {
                    navlinkss.classList.remove("landing-sc-begin2-exit");
                    navlinks.classList.remove("landing-sc-begin2-min-max-exit");
                    navlinkkk.classList.remove("landing-sc-begin2-min-exit")
                }
            }
        }
        if (window.scrollY > 0 && window.scrollY < 670) {
            if (window.innerWidth > 1024) {
                const navlinks = document.querySelector(".landing-sc-begin2-min-max");
                if (navlinks) {
                    navlinks.style.cssText = `transform:rotate(${26 - (window.scrollY / 26.8)}deg);
                    top:${30 - (window.scrollY / 22.3)}vh; margin-left:${-200 + (window.scrollY / 2.23333)}px
                    `
                }
            }
            if (window.innerWidth < 1024 && window.innerWidth > 860) {
                const navlinks = document.querySelector(".landing-sc-begin2-min-max");
                if (navlinks) {
                    navlinks.style.cssText = `transform:rotate(${26 - (window.scrollY / 26.8)}deg);
                    top:${30 - (window.scrollY / 22.3)}vh; margin-left:${-250 + (window.scrollY / 3.5)}px
                    `
                }
            }

            const navlink = document.querySelector(".landing-sc-begin2-min")
            if (navlink) {
                navlink.style.cssText = `clip-path : circle(${50 + (window.scrollY / 6.7)}% at 100% 0%);`
            }
        }
        if (window.scrollY > 670 && window.scrollY < 1300) {
            const navlink = document.querySelector(".landing-sc-begin2-min")
            if (navlink) {
                navlink.style.cssText = `clip-path : circle(${175 - (window.scrollY / 6.7)}% at 0% 100%);`
            }
        }
    };

    window.addEventListener("scroll", chagnerotation);

    return (
        <div className='land-head'>

            <div ref={first} className="overlay first"></div>
            <div ref={second} className="overlay second">
                <h1>BUY INFO.</h1>
            </div>
            <div ref={third} className="overlay third"></div>


            <div className="landing-sc-content">
                <div className='landing-sc-begin2-min'>

                </div>
                <div className='landing-sc-begin'>
                    <div className='landing-sc-begin1'>
                        <div className="landing-sc-begin1-min">
                            <h1>Start Selling</h1>
                            <h2>Online for free</h2>
                            <div className="landing-sc-begin1-min-max"></div>
                            <p>We’re putting free trials on trial. With Ecwid, you get free FOREVER. Set up your free account once, and keep it as long as you like. Seriously.</p>
                            <button>Get started for free</button>
                        </div>
                    </div>
                    <div className='landing-sc-begin2'>

                        <div className="landing-sc-begin2-min-max">
                            <img src={Img1} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="landing-sc-content">
                <div className='landing-sc-begin'>
                    <div className='landing-sc1-begin1'>
                        <div className="landing-sc1-begin1-min">
                            <h1>Your free online</h1>
                            <h2>store is just a few</h2>
                            <h1>clicks away.</h1>
                            <p>Join the 1.6M small businesses that have trusted the Ecwid E‑commerce platform to sell online.</p>
                            <button>Get started for free</button>
                        </div>
                    </div>
                    <div className='landing-sc-beginxx'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingScreen;


// <div className='nor-begin-xx'>
// <img src={Img2} />
// </div>
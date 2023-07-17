import React, { useEffect } from 'react';
import './App.css';
import { gsap } from 'gsap';
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import ScrollMagic from 'scrollmagic';
import phoneMockup from './assets/phone-mockup.png';
import screen1 from './assets/screen1.jpg';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';

ScrollMagicPluginGsap(ScrollMagic, gsap);
const DURATION = 2500;

function createScene(controller, id, x, y, height, rotation, width='400px') {
    new ScrollMagic.Scene({
        triggerElement: ".animation",
        duration: DURATION,
        triggerHook: 0,
    })
        .setTween(gsap.timeline()
            .add(gsap.from(`#${id}`, 1, { x, y, height, width }))
            .add(gsap.to(`#${id}`, 0.6, { rotate: rotation }), '<')
            .add(gsap.to(`#${id}`, 0.4, { rotate: 0 }), '>')
        )
        .setPin(`#${id}`)
        .addTo(controller);
}

function App() {
    useEffect(() => {
        const controller = new ScrollMagic.Controller();

        createScene(controller, 'image1', '27vw', '1vw', '400px', 20);
        createScene(controller, 'image2', '38vw', '-10vw', '400px', -30);
        createScene(controller, 'image3', '20vw', '-13vw', '400px', 17);
        createScene(controller, 'image4', '41vw', '13vw', '400px', 17);
        createScene(controller, 'image5', '39vw', '-23vw', '400px', 17);
        createScene(controller, 'image6', '10vw', '12vw', '400px', -17);

        /** Scrolling Text */
        new ScrollMagic.Scene({
            triggerElement: ".animation", duration: DURATION,
            triggerHook: 0,
        })
            .setTween(gsap.timeline()
                .add(gsap.to('#scrolling-text', 1, {x: '-130vw'}), '<')
                .add(gsap.to('#scrolling-text', 1, {opacity: 0}), '<0.3')
            )
            .setPin("#scrolling-text")
            .addTo(controller)

        /* FIX VERTICALLY */
        new ScrollMagic.Scene({
            triggerElement: ".animation", duration: DURATION,
            triggerHook: 0, // trigger at the top of viewport
        })
            .setTween(gsap.timeline()
                .add(gsap.from('#phone-screen', 1, {y: '55vw'}))
            )
            .setPin("#phone-screen")
            .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: ".animation", duration: DURATION,
            triggerHook: 0, // trigger at the top of viewport
        })
            .setTween(gsap.timeline()
                .add(gsap.from('#phone-mockup', 1, {y: '55vw'}))
            )
            .setPin("#phone-mockup")
            .addTo(controller);
    }, []);

    return (
        <>
            {/*<h2 className="logo">UNDO:</h2>*/}

            <section className="animation">
                <div id="image1" className="image image1" style={{ backgroundImage: `url(${image1})` }} />
                <div id="image2" className="image image2" style={{ backgroundImage: `url(${image2})` }} />
                <div id="image3" className="image image3" style={{ backgroundImage: `url(${image3})` }} />
                <div id="image4" className="image image4" style={{ backgroundImage: `url(${image4})` }} />
                <div id="image5" className="image image5" style={{ backgroundImage: `url(${image5})` }} />
                <div id="image6" className="image image6" style={{ backgroundImage: `url(${image6})` }} />

                <h2 id="scrolling-text" className="scrolling-text">A new way of designing, discovering and sharing time.</h2>

                <img id="phone-screen" src={screen1} alt="phone-screen1" className="phone-image phone-screen" />
                <img id="phone-mockup" src={phoneMockup} alt="phone-mockup" className="phone-image phone-mockup" />
            </section>

            <footer className="footer">FOOTER</footer>
        </>
    );
}

export default App;

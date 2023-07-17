import React, {useEffect} from 'react';
import './App.css';
import {gsap} from 'gsap';
import {ScrollMagicPluginGsap} from "scrollmagic-plugin-gsap";
import {ScrollMagicPluginIndicator} from "scrollmagic-plugins";
import ScrollMagic from 'scrollmagic';
import phoneMockup from './assets/phone-mockup.png';
import screen1 from './assets/screen1.jpg';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';

ScrollMagicPluginGsap(ScrollMagic, gsap); // add gsap to ScrollMagic
ScrollMagicPluginIndicator(ScrollMagic); // add indicators plugin

const DURATION = 1000;
function App() {
    useEffect(() => {
        const controller = new ScrollMagic.Controller();

        // MOVE HORIZONTALLY
        /** Img 1 */
        new ScrollMagic.Scene({
            triggerElement: ".animation", duration: DURATION,
            triggerHook: 0, // trigger at the top of viewport
        })
            // .addIndicators()
            .setTween(gsap.timeline()
                .add(gsap.from('#id1', 1, {x: '27vw', y: '10vw'}))
                .add(gsap.to('#id1', 0.3, {rotate: 20}), '<')
                .add(gsap.to('#id1', 0.7, {rotate: 0}), '>')
            )
            .setPin("#id1") // pin the image when it's in the center of the viewport
            .addTo(controller)
            .addIndicators()

        /** Img 1 */
        new ScrollMagic.Scene({
            triggerElement: ".animation", duration: DURATION,
            triggerHook: 0,
        })
            .setTween(gsap.timeline()
                .add(gsap.from('#id2', 1, {x: '38vw', y: '5vw'}))
                .add(gsap.to('#id2', 0.5, {rotate: -30}), '<')
                .add(gsap.to('#id2', 0.5, {rotate: 0}), '>')
            )
            .setPin("#id2")
            .addTo(controller)


        /* FIX VERTICALLY */
        new ScrollMagic.Scene({
            triggerElement: ".animation", duration: DURATION,
            triggerHook: 0, // trigger at the top of viewport
        })
            .setPin("#screen1")
            .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: ".animation", duration: DURATION,
            triggerHook: 0, // trigger at the top of viewport
        })
            .setPin("#phone-mockup")
            .addTo(controller);
    }, []);

    return (<div className="App">
        {/*<header className="header">*/}
        {/*    HEADER*/}
        {/*</header>*/}

        <section className={"animation"}>
            <img
                id="id1"
                src={image1}
                className={['image', 'image1'].join(' ')}
            />
            <img
                id="id2"
                src={image2}
                className={['image', 'image2'].join(' ')}
            />

            <img
                id="screen1"
                src={screen1}
                className={['phone-image', 'screen1'].join(' ')}
            />
            <img
                id="phone-mockup"
                src={phoneMockup}
                className={['phone-image', 'phone-mockup'].join(' ')}
            />
        </section>
        <footer className="footer">
            FOOTER
        </footer>
    </div>);
}

export default App;

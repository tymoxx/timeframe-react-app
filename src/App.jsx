import React, {useEffect, useRef} from 'react';
import './App.css';
import {gsap} from 'gsap';
import {ScrollMagicPluginGsap} from "scrollmagic-plugin-gsap";
import {ScrollMagicPluginIndicator} from "scrollmagic-plugins";
import ScrollMagic from 'scrollmagic';
import phoneMockup from './assets/phone-mockup.png';
import screen1 from './assets/screen1.jpg';
ScrollMagicPluginGsap(ScrollMagic, gsap); // add gsap to ScrollMagic
ScrollMagicPluginIndicator(ScrollMagic); // add indicators plugin

const DURATION = 1000;
function App() {
    const imgRef = useRef();

    useEffect(() => {
        const controller = new ScrollMagic.Controller();

        // TODO: delete?
        // Calculate half of the width difference between the image and the viewport
        const xOffset = (imgRef.current.offsetWidth - window.innerWidth) / 2;

        // Move horizontally
        new ScrollMagic.Scene({
            triggerElement: ".animation", duration: DURATION,
            triggerHook: 0, // trigger at the top of viewport
        })
            // .addIndicators()
            .setTween(gsap.timeline()
                .add(gsap.from('#pin1', 1, {x: '38vw', y: '5vw'}))
                .add(gsap.to('#pin1', 0.5, {rotate: 30}), '<')
                .add(gsap.to('#pin1', 0.5, {rotate: 0}), '>')
            )
            .setPin("#pin1") // pin the image when it's in the center of the viewport
            .addTo(controller)
            .addIndicators()


        /* Fix vertically */
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
                ref={imgRef}
                id="pin1"
                src={'https://assets.website-files.com/5c6648378238e311a00c7e61/5c6648378238e318c30c7f6d_hero-002.jpg'}
                className={'image'}
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

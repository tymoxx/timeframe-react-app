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
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';

ScrollMagicPluginGsap(ScrollMagic, gsap); // add gsap to ScrollMagic
ScrollMagicPluginIndicator(ScrollMagic); // add indicators plugin

const DURATION = 2500;

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
                .add(gsap.from('#id1', 1, {x: '27vw', y: '1vw', height: '400px', width: '400px'}))
                .add(gsap.to('#id1', 0.3, {rotate: 20}), '<')
                .add(gsap.to('#id1', 0.7, {rotate: 0}), '>')
            )
            .setPin("#id1") // pin the image when it's in the center of the viewport
            .addTo(controller)
            // .addIndicators()

        /** Img 2 pink */
        new ScrollMagic.Scene({
            triggerElement: ".animation", duration: DURATION,
            triggerHook: 0,
        })
            .setTween(gsap.timeline()
                .add(gsap.from('#id2', 1, {x: '38vw', y: '-10vw', height: '400px', width: '400px'}))
                .add(gsap.to('#id2', 0.5, {rotate: -30}), '<')
                .add(gsap.to('#id2', 0.5, {rotate: 0}), '>')
            )
            .setPin("#id2")
            .addTo(controller)

        /** Img 3 yellow */
        new ScrollMagic.Scene({
            triggerElement: ".animation", duration: DURATION,
            triggerHook: 0,
        })
            .setTween(gsap.timeline()
                .add(gsap.from('#id3', 1, {x: '20vw', y: '-13vw', height: '400px'}))
                .add(gsap.to('#id3', 0.6, {rotate: 17}), '<')
                .add(gsap.to('#id3', 0.4, {rotate: 0}), '>')
            )
            .setPin("#id3")
            .addTo(controller)

        /** Img 4 green */
        new ScrollMagic.Scene({
            triggerElement: ".animation", duration: DURATION,
            triggerHook: 0,
        })
            .setTween(gsap.timeline()
                .add(gsap.from('#id4', 1, {x: '41vw', y: '13vw', height: '400px'}))
                .add(gsap.to('#id4', 0.6, {rotate: 17}), '<')
                .add(gsap.to('#id4', 0.4, {rotate: 0}), '>')
            )
            .setPin("#id4")
            .addTo(controller)

        /** Img 5 */
        new ScrollMagic.Scene({
            triggerElement: ".animation", duration: DURATION,
            triggerHook: 0,
        })
            .setTween(gsap.timeline()
                .add(gsap.from('#id5', 1, {x: '39vw', y: '-23vw', height: '400px'}))
                .add(gsap.to('#id5', 0.6, {rotate: 17}), '<')
                .add(gsap.to('#id5', 0.4, {rotate: 0}), '>')
            )
            .setPin("#id5")
            .addTo(controller)

        /** Img 6 */
        new ScrollMagic.Scene({
            triggerElement: ".animation", duration: DURATION,
            triggerHook: 0,
        })
            .setTween(gsap.timeline()
                .add(gsap.from('#id6', 1, {x: '10vw', y: '12vw', height: '400px'}))
                .add(gsap.to('#id6', 0.6, {rotate: -17}), '<')
                .add(gsap.to('#id6', 0.4, {rotate: 0}), '>')
            )
            .setPin("#id6")
            .addTo(controller)

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
                .add(gsap.from('#screen1', 1, {y: '55vw'}))
            )
            .setPin("#screen1")
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
        <div className="App">
            {/*<header className="header">*/}
            {/*    HEADER*/}
            {/*</header>*/}

            <h2
                className={'logo'}>
                UNDO:
            </h2>

            <section className={"animation"}>
                <div
                    id="id1"
                    className={['image', 'image1'].join(' ')}
                    style={{backgroundImage: `url(${image1})`}}
                />
                <div
                    id="id2"
                    className={['image', 'image2'].join(' ')}
                    style={{backgroundImage: `url(${image2})`}}
                />
                <div
                    id="id3"
                    className={['image', 'image3'].join(' ')}
                    style={{backgroundImage: `url(${image3})`}}
                />
                <div
                    id="id4"
                    className={['image', 'image4'].join(' ')}
                    style={{backgroundImage: `url(${image4})`}}
                />
                <div
                    id="id5"
                    className={['image', 'image5'].join(' ')}
                    style={{backgroundImage: `url(${image5})`}}
                />
                <div
                    id="id6"
                    className={['image', 'image6'].join(' ')}
                    style={{backgroundImage: `url(${image6})`}}
                />

                <h2
                    id={'scrolling-text'}
                    className={'scrolling-text'}>
                    A new way of designing, discovering and sharing time.
                </h2>

                {/** images of Phone*/}
                <img
                    id="screen1"
                    src={screen1}
                    alt={'screen1'}
                    className={['phone-image', 'screen1'].join(' ')}
                />
                <img
                    id="phone-mockup"
                    src={phoneMockup}
                    alt={'phone-mockup'}
                    className={['phone-image', 'phone-mockup'].join(' ')}
                />
            </section>

            <footer className="footer">
                FOOTER
            </footer>
        </div>);
}

export default App;

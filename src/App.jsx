import React, {useEffect, useRef} from 'react';
import './App.css';
import {gsap} from 'gsap';
import {ScrollMagicPluginGsap} from "scrollmagic-plugin-gsap";
import {ScrollMagicPluginIndicator} from "scrollmagic-plugins";
import ScrollMagic from 'scrollmagic';

ScrollMagicPluginGsap(ScrollMagic, gsap); // add gsap to ScrollMagic
ScrollMagicPluginIndicator(ScrollMagic); // add indicators plugin

function App() {
    const imgRef = useRef();

    useEffect(() => {
        const controller = new ScrollMagic.Controller();

        // Calculate half of the width difference between the image and the viewport
        const xOffset = (imgRef.current.offsetWidth - window.innerWidth) / 2;

        //* Move horizontally */
        new ScrollMagic.Scene({
            triggerElement: ".Animation",
            duration: 400,
        })
            // .addIndicators()
            .setTween(gsap.from('#pin1', 1, {x: -xOffset}))
            .setPin("#pin1") // pin the image when it's in the center of the viewport
            .addTo(controller);

        /* Fix vertically */
        new ScrollMagic.Scene({
            triggerElement: ".Animation",
            duration: 400,
        })
            .addIndicators()
            .setPin("#phone-image")
            .addTo(controller);

    }, []);

    return (
        <div className="App">
            <header className="header">
                HEADER
            </header>

            <section className={"Animation"}>
                <img
                    ref={imgRef}
                    id="pin1"
                    src={'https://assets.website-files.com/5c6648378238e311a00c7e61/5c6648378238e318c30c7f6d_hero-002.jpg'}
                    className={'image'}
                />

                <img
                    id="phone-image"
                    src={'https://assets.website-files.com/5c6648378238e311a00c7e61/5c6648378238e318c30c7f6d_hero-002.jpg'}
                    className={'phone-image'}
                />
            </section>
            <footer className="footer">
                FOOTER
            </footer>
        </div>
    );
}

export default App;

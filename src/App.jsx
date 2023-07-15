import React, {useEffect, useRef} from 'react';
import './App.css';
import {gsap} from 'gsap';
import {ScrollMagicPluginGsap} from "scrollmagic-plugin-gsap";
import { ScrollMagicPluginIndicator} from "scrollmagic-plugins";
import ScrollMagic from 'scrollmagic';

ScrollMagicPluginGsap(ScrollMagic, gsap); // add gsap to ScrollMagic
ScrollMagicPluginIndicator(ScrollMagic); // add indicators plugin

function App() {
    const imageRef1 = useRef(null);
    // const imageRef2 = useRef(null);

    const tween = gsap.fromTo(imageRef1.current, 2, {x: 700}, {x: 0, ease: "power1.out"});

    useEffect(() => {
        const controller = new ScrollMagic.Controller();

        // Create tween for first image
        const scene1 = new ScrollMagic.Scene({
            triggerElement: ".Animation",
            duration: 3000
        })
            .setPin("#pin1")
            .addIndicators() // add indicators (requires plugin)
            .setTween(tween)
            .addTo(controller);

        // Create tween for second image
        // var tween2 = gsap.fromTo(imageRef2.current, 2, {x: 700}, {x: 0, ease: "power1.out"});
        // var scene2 = new ScrollMagic.Scene({triggerElement: imageRef2.current, duration: 300})
        //     .setTween(tween2)
        //     .addTo(controller);

    }, []);

    return (
        <div className="App">
            <header className="App-header">
                HEADER
            </header>

            <section className={"Animation"}>
                <img
                    ref={imageRef1}
                    id="pin1"
                    src={'https://assets.website-files.com/5c6648378238e311a00c7e61/5c6648378238e318c30c7f6d_hero-002.jpg'}
                    className={'image'}
                />
                {/*<img ref={imageRef2} src={'https://assets.website-files.com/5c6648378238e311a00c7e61/5c6648378238e385680c7ee6_grid-29.jpg'} className={'image'}/>*/}
            </section>
            <footer className="App-footer">
                FOOTER
            </footer>
        </div>

    );
}

export default App;

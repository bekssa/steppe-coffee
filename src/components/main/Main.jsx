import bg from "../../assets/Rectangle-back.png"
import { First } from "../first/First.jsx";
import {Second} from "../second/Second.jsx";
import {Third} from "../third/Third.jsx";
import {Fourth} from "../fourth/Fourth.jsx";
import {Fifth} from "../fifth/Fifth.jsx";
import {Sixth} from "../sixth/Sixth.jsx";
import {Seventh} from "../seventh/Seventh.jsx";
import {Eighth} from "../eighth/Eighth.jsx";
import {Ninth} from "../ninth/Ninth.jsx";
import Tenth from "../tenth/Tenth.jsx";
import {Eleventh} from "../eleventh/Eleventh.jsx";
import {Twelfth} from "../twelfth/Twelfth.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger, useGSAP);
export const Main = () => {
    const mainRef = useRef();

    useGSAP(() => {
        const sections = mainRef.current.children;

        gsap.utils.toArray(sections).forEach((section) => {
            gsap.from(section, {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                }
            });
        });
    }, { scope: mainRef });

    return (
        <div ref={mainRef}
            className="bg-cover bg-fixed"
            style={{ backgroundImage: `url(${bg})` }}
        >
                <First />
                <Second />
                <Third />
                <Fourth />
                <Fifth />
                <Sixth />
                <Seventh />
                <Eighth/>
                <Ninth/>
                <Tenth/>
                <Eleventh/>
                <Twelfth/>
                <div className="font-ginger flex justify-end"><h5>Suierkulov Bekassyl tg: @uraaasdu</h5></div>
            </div>
    );
};
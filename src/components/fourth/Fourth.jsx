import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {useRef} from "react";
import one from '../../assets/decors/1.png'
import two from '../../assets/decors/2.png'
import three from '../../assets/decors/3.png'
import four from '../../assets/decors/4.png'
import five from '../../assets/decors/5.png'
import six from '../../assets/decors/6.png'
import seven from '../../assets/decors/7.png'
import eight from '../../assets/decors/8.png'
import ramka from '../../assets/decors/ramka.png'
import ramka2 from '../../assets/decors/ramka2.png'
gsap.registerPlugin(useGSAP);export const Fourth = () => {
    const container = useRef();
    const photos = [one, two, three, four, five, six, seven, eight];

    useGSAP(() => {
        const imgs = gsap.utils.toArray('.slide-photo');
        gsap.set(imgs, { opacity: 0 });
        gsap.set(imgs[0], { opacity: 1 });
        const tl = gsap.timeline({ repeat: -1 });

        imgs.forEach((img, index) => {
            const nextIndex = (index + 1) % imgs.length;
            tl.to(imgs[nextIndex], {
                opacity: 1,
                duration: 1.5,
                ease: 'power2.inOut'
            }, "+=2")
                .to(img, {
                    opacity: 0,
                    duration: 1.5,
                    ease: 'power2.inOut'
                }, "<");
        });
    }, { scope: container });


    return (
        <div className="relative w-full h-screen overflow-hidden rounded-[40px] mb-[40px]">

            <div ref={container} className="absolute inset-0 z-0">
                {photos.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        className="slide-photo absolute inset-0 w-full h-full object-cover "
                        alt={`slide ${i}`}
                    />
                ))}
            </div>

            <img
                src={ramka2}
                alt="top-right-frame"
                className="absolute top-0 right-0 z-10 "
            />

            <img
                src={ramka}
                alt="bottom-left-frame"
                className="absolute bottom-0 left-0 z-10"
            />

        </div>
    )
}
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import one from '../../assets/Comics/1.png'
import two from '../../assets/Comics/2.png'
import three from '../../assets/Comics/3.png'
import four from '../../assets/Comics/4.png'
import five from '../../assets/Comics/5.png'

gsap.registerPlugin(useGSAP);

export const Twelfth = () => {
    const container = useRef();
    const photos = [one, two, three, four, five];

    useGSAP(() => {
        const imgs = gsap.utils.toArray('.comic-photo');


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
        <div ref={container} className="relative w-full h-screen overflow-hidden rounded-[40px] mb-[100px]">
            {photos.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    className="comic-photo absolute inset-0 w-full h-full object-cover"
                    alt={`comic-${i}`}
                />
            ))}
        </div>
    );
};
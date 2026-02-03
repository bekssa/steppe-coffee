import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import one from '../../assets/deserts/1.png'
import two from '../../assets/deserts/2.png'
import three from '../../assets/deserts/3.png'
import four from '../../assets/deserts/4.png'
import five from '../../assets/deserts/5.png'

gsap.registerPlugin(useGSAP);

export const Right = () => {
    const container = useRef();
    const photos = [one, two, three, four, five];

    useGSAP(() => {
        const imgs = gsap.utils.toArray('.desert-photo');

        gsap.set(imgs, { opacity: 0 });
        gsap.set(imgs[0], { opacity: 1 });

        const tl = gsap.timeline({ repeat: -1 });

        imgs.forEach((img, index) => {
            const nextIndex = (index + 1) % imgs.length;

            tl.to(imgs[nextIndex], {
                opacity: 1,
                duration: 1.2,
                ease: 'power2.inOut'
            }, "+=2.5")
                .to(img, {
                    opacity: 0,
                    duration: 1.2,
                    ease: 'power2.inOut'
                }, "<");
        });
    }, { scope: container });

    return (
        <div ref={container} className="flex-1/2 relative w-full h-screen overflow-hidden rounded-[40px]">
            {photos.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    className="desert-photo absolute inset-0 w-full object-cover"
                    alt={`desert-${i}`}
                />
            ))}
        </div>
    );
};
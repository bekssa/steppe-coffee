import vecher from '../../assets/Vecher.png';
import vecher2 from '../../assets/vecher2.png';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export const Left = () => {
        const containerRef = useRef();

        useGSAP(() => {
            const photo1 = containerRef.current.querySelector('.photo-1');
            const photo2 = containerRef.current.querySelector('.photo-2');

            gsap.set(photo1, { opacity: 1 });
            gsap.set(photo2, { opacity: 0 });

            const tl = gsap.timeline({
                repeat: -1,
                yoyo: false
            });

            tl.to(photo2, {
                opacity: 1,
                duration: 1.5,
                ease: 'power2.inOut'
            }, "+=2")
                .to(photo1, {
                    opacity: 0,
                    duration: 1.5,
                    ease: 'power2.inOut'
                }, "<")

                .to(photo1, {
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power2.inOut'
                }, "+=2")
                .to(photo2, {
                    opacity: 0,
                    duration: 1.5,
                    ease: 'power2.inOut'
                }, "<");

        }, { scope: containerRef }
    )
    return (
        <div
            ref={containerRef}
            className="relative flex-1/3 w-full h-screen overflow-hidden rounded-[20px] shadow-lg"
        >
            <img
                src={vecher}
                alt="First scene"
                className="photo-1 absolute inset-0 w-full object-cover"
            />
            <img
                src={vecher2}
                alt="Second scene"
                className="photo-2 absolute inset-0 w-full object-cover"
            />
        </div>
    );
}
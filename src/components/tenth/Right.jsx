import flower from '../../assets/Flower.png'
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const Right = () => {
    gsap.registerPlugin(useGSAP);

    const photoRef = useRef();

    useGSAP(() => {
        if (photoRef.current) {
            gsap.to(photoRef.current, {
                rotation: "+=72",
                duration: 1.5,
                ease: "power2.inOut",
                repeat: -1,
                yoyo: true,
            });
        }
    }, { scope: photoRef });
    return (
        <div className = "bg-[#FBE400] px-[168px] rounded-[40px] flex items-center justify-center ">
           <div clas> <img src={flower} ref={photoRef} alt="Flower"/>
           </div>
        </div>
    )
}
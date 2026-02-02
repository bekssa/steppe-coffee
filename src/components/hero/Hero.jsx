import temp from '../../assets/temp.png';
import text from '../../assets/text.png';
import { useRef, useEffect } from "react";
import gsap from "gsap";
export const Hero = () => {
    const imgRef = useRef(null);
    useEffect(() => {
            gsap.to(imgRef.current, {
                rotate: 360,
                scale: 1.2,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });
    }, []);
    return (
        <div className="h-[850px] bg-[#FAF100] rounded-b-[48px] overflow-x-hidden">
            <div className="flex items-center justify-end h-screen flex-col">
                <img ref={imgRef} src={temp} alt="qwe" className="w-64 h-64 "/>
                <img src={text} alt="text" className="w-[635px] h-[96px]"/>
            </div>
        </div>
    )
};
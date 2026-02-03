import hand from '../../../assets/hand.png'
import syrop from '../../../assets/syrupfinn2.mp4'
export const Left = () => {
    return (
        <div className=" relative  w-full h-full">
            <img src={hand} alt="Hand holding phone" />
            <div className="absolute top-[16%] left-[28%] w-[49%] h-[63%] overflow-hidden rounded-xl bg-black">
            <video src={syrop}
                   autoPlay
                   loop
                   muted
                   playsInline
                   className="w-full h-full object-cover"
            />
        </div>
        </div>

    )
}

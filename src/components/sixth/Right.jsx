import phone from '../../assets/phone.png'
import sang from '../../assets/sangwanimation3.mp4'

export const Right = () => {
    return (
        <div className="flex justify-center items-center ">

            <div className="relative w-[500px] h-[700px] mx-auto">

                <img
                    src={phone}
                    alt="Phone frame"
                    className="absolute inset-0 w-full h-full object-contain"
                />

                <div className="absolute
                                top-[10%]
                                left-[19%]
                                w-[62%]
                                h-[80%]
                                overflow-hidden">
                    <video
                        src={sang}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}
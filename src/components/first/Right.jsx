import saigak from "../../assets/saigak.mp4"

export const Right = () => {
    return (
        <div className=" w-full ">
            <video
                src={saigak}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[40px]"
            />
        </div>
    );
}
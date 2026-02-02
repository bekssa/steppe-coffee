import saigak from "../../assets/Saigak-killer.png"

export const Right = () => {
    return (
        <div className=" w-full max-w-[350px] md:max-w-[400px]">
            <img
                src={saigak}
                alt="сайгак"
                className="w-full h-auto drop-shadow-2xl"
            />
        </div>
    );
}
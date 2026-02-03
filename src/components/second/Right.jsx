import after from "../../assets/posle.png";

export const Right = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-[23px]">
            <h2 className="font-gothic text-[64px] text-[#393939]">ПОСЛЕ</h2>
            <div className="rounded-[20px] border border-white shadow-2xl shadow-[#C0C7F7] bg-white/10 backdrop-blur-lg py-[60px] px-[27.5px] ">
                <img src={after} alt="before"/>
            </div>
        </div>
    )
}
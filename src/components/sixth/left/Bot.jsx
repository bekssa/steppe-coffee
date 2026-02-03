import sept from '../../../assets/sept.png'

export const Bot = () => {
    return (
        <div className="flex flex-col p-5 gap-[25px] rounded-3xl border border-white shadow-2xl shadow-[#C0C7F7] bg-white/10 backdrop-blur-lg">
            <div>
                <img src={sept} alt="september"/>
            </div>
            <div className="flex justify-between">
                <div>
                    <p>Охваченные аккаунты</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p>2190</p>
                    <p>-65.5%</p>
                </div>
            </div>
        </div>
    )
}
import right from '../../assets/5right.png'

export const Right = () => {
    return (
        <div className="flex-1 max-h-[702px] overflow-hidden rounded-[40px]">
            <img
                src={right}
                className="w-full h-full object-cover"
                alt="sign"
            />
        </div>
    )
}
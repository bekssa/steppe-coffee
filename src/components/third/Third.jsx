import {Left} from "./left/Left.jsx";
import {Right} from "./right/Right.jsx";

export const Third= () => {
    return (
        <div className="mx-[80px] mb-10 flex gap-6 items-center">
            <Left />
            <Right/>
        </div>
    )
}
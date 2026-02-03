import {Top} from "./Top.jsx";
import {Mid} from "./Mid.jsx";
import {Bot} from "./Bot.jsx";

export const Right = () => {
    return (
        <div className="flex flex-col gap-[20px]">
            <Top/>
            <Mid/>
            <Bot/>
        </div>
    )
}
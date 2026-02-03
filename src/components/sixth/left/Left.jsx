import {Top} from "./Top.jsx";
import {Bot} from "./Bot.jsx";

export const Left = () => {
    return (
        <div className="flex flex-col gap-5">
            <Top/>
            <Bot/>
        </div>
    )
}
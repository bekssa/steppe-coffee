import {Left} from "./Left.jsx";
import {Right} from "./Right.jsx";
export const First = () => {
    return (
        <div className="flex items-center justify-center min-h-screen p-6 md:p-12 text-[#393939]">
        <div className="flex flex-col md:flex-row items-center gap-4">
            <Left></Left>
            <Right></Right>
        </div>
            </div>
    );
}
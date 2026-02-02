import bg from "../../assets/Rectangle-back.png"
import { First } from "../first/First.jsx";

export const Main = () => {
    return (
        <div
            className="bg-cover"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <First />
        </div>
    );
};

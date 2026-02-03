import bg from "../../assets/Rectangle-back.png"
import { First } from "../first/First.jsx";
import {Second} from "../second/Second.jsx";
import {Third} from "../third/Third.jsx";
import {Fourth} from "../fourth/Fourth.jsx";
import {Fifth} from "../fifth/Fifth.jsx";
import {Sixth} from "../sixth/Sixth.jsx";
import {Seventh} from "../seventh/Seventh.jsx";
import {Eighth} from "../eighth/Eighth.jsx";
import {Ninth} from "../ninth/Ninth.jsx";
import Tenth from "../tenth/Tenth.jsx";
import {Eleventh} from "../eleventh/Eleventh.jsx";
import {Twelfth} from "../twelfth/Twelfth.jsx";

export const Main = () => {
    return (
        <div
            className="bg-cover"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <First />
            <Second />
            <Third />
            <Fourth />
            <Fifth />
            <Sixth />
            <Seventh />
            <Eighth/>
            <Ninth/>
            <Tenth/>
            <Eleventh/>
            <Twelfth/>
        </div>
    );
};

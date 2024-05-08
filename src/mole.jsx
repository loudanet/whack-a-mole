import { useState, useEffect, useContext } from "react";
import { TimeContext } from "./score";
import "./mole.css";

export default function(props) {
    let [state, setState] = useState("middle");
    let active = useContext(TimeContext);

    useEffect(()=> {
        const intervalId = setInterval(()=> {
            if (active) {
                const r = Math.random();
                if (r > 0.7) {
                    setState("right");
                } else if (r < 0.3) {
                    setState("left");
                } else {
                    setState("centre");
                }
            }
        }, 1000)

        return () => clearInterval(intervalId)
    }, [active])

    const mole = (
    <div id="mole" className={state} onClick={props.onClick}>
        <p>    /\/\ </p>
        <p>( oo )</p>
        <p>\\/ </p>
        <p>\  </p>
    </div>
    );

    return mole;
}

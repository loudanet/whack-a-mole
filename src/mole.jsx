import { useState, useEffect } from "react";
import "./mole.css";

export default function(props) {
    let [state, setState] = useState("middle");

    useEffect(()=> {
        const intervalId = setInterval(()=> {
            const r = Math.random();
            if (r > 0.7) {
                setState("right");
            } else if (r < 0.3) {
                setState("left");
            } else {
                setState("centre");
            }
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    const mole = (
    <div className={state} onClick={props.onClick}>
        <p>    /\/\ </p>
        <p>( oo )</p>
        <p>\\/ </p>
        <p>\  </p>
    </div>
    );

    return mole;
}

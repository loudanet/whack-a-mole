import { useState, useEffect } from "react";
import "./mole.css";

export default function() {
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
        }, 500)

        return () => clearInterval(intervalId)
    }, [])

    const mole = (
    <div className={state}>
        <p>    /\/\ </p>
        <p>( oo )</p>
        <p>\\/ </p>
        <p>\  </p>
    </div>
    );

    return mole;
}

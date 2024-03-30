import { useState, useEffect } from "react";
import "./mole.css";

export default function() {
    let [state, setState] = useState("hidden");

    useEffect(()=> {
        const intervalId = setInterval(()=> {
            if (Math.random() > 0.5) {
                setState("shown");
            } else {
                setState("hidden");
            }
        }, 200)

        return () => clearInterval(intervalId)
    }, [])

    return (<h1 className={state}>MOLE!</h1>);
}

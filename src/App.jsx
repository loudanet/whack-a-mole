import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, zero, time, TimeContext } from "./score.js"
import Mole from "./mole.jsx";
import "./styles.css";

function App() {
  let currentScore = useSelector(state => state.count);
  let remainingTime = useSelector(state => state.time);
  let [active, setActive] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalId = setInterval(function() {
      if (remainingTime <= 0) {
        setActive(false);
        clearInterval(intervalId);
        return;
      }
      if (active) {
        dispatch(time());
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [active, remainingTime])

  return (
    <TimeContext.Provider value={active}>
      <h1>
        WHACK-A-MOLE
      </h1>
      <div>
        <p>
          Score is {currentScore} and time left is {remainingTime}
        </p>
        {active ? 
                  <button onClick={() => setActive(false)}>
                  PAUSE!
                  </button> : 
                  <button onClick={() => setActive(true)}>
                  START!
                  </button>
        }
      </div>
      <div>
        <Mole onClick={() => {
          if (active) {
            dispatch(increment())
          }
          }} />
      </div>
    </TimeContext.Provider>
  )
}

export default App

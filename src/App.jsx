import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, zero, time } from "./score.js"
import Mole from "./mole.jsx";

function App() {
  let currentScore = useSelector(state => state.count);
  let remainingTime = useSelector(state => state.time);
  let active = useSelector(state => state.time > 0);
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalId = setInterval(function() {
      if (active) {
        dispatch(time());
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [active])

  return (
    <>
      <div>
        <p>
          Count is {currentScore} and time left is {remainingTime}
        </p>
        <button onClick={() => dispatch(increment())}>
          UP!
        </button>
        <button onClick={() => dispatch(decrement())}>
          DOWN!
        </button>
        <button onClick={() => dispatch(zero())}>
          ZERO!
        </button>
      </div>
      <div>
        <Mole/>
      </div>
    </>
  )
}

export default App

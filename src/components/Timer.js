import { useEffect } from "react";
import { useQuiz } from "../context/QuizContext";

function Timer() {
  const { dispatch, secondRemaining } = useQuiz();
  const min = Math.floor(secondRemaining / 60);
  const sec = secondRemaining % 60;

  useEffect(
    function () {
      const data = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(data);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {min < 10 && "0"} {min} : {sec < 10 && "0"} {sec}
    </div>
  );
}

export default Timer;

import { useQuiz } from "../../src/context/QuizContext";

function Progress() {
  const { index, numQuestion, maxPoints, points, answer } = useQuiz();
  // console.log(points);
  return (
    <header className="progress">
      <progress max={numQuestion} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestion}
      </p>
      <p>
        Points <strong>{points}</strong>/{maxPoints}
      </p>
    </header>
  );
}

export default Progress;

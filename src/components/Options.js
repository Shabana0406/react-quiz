import { useQuiz } from "../context/QuizContext";

function Options() {
  const { questions, answer, dispatch, index } = useQuiz();
  // console.log(questions[index].options);
  const hasAnswer = answer !== null;

  return (
    <div className="options">
      {questions[index].options.map((option, i) => (
        <button
          className={`btn btn-option  ${i === answer ? "answer" : ""}
          ${
            hasAnswer
              ? i === questions[index].correctOption
                ? "correct"
                : "wrong"
              : ""
          }  `}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
          disabled={hasAnswer}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;

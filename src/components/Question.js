import Options from "./Options";
import { useQuiz } from "../context/QuizContext";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions[index];
  // console.log(questions);

  return (
    <div>
      <h4>{question.question}</h4>
      <Options />
    </div>
  );
}

export default Question;

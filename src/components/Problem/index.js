import { useState } from "react";

import "./index.css";

const Problem = (each, saveAnswer) => {
  const { questionNo, question, answer } = each;
  const [answerInput, setAnswer] = useState(answer);

  const onSubmitAnswer = () => {
    saveAnswer(questionNo, answerInput);
  };

  const onChangeAnswer = (event) => {
    setAnswer(event.target.value);
  };

  const renderQuestion = (question) => <p className="question">{question}</p>;

  const renderAnswer = () => (
    <input onChange={onChangeAnswer} value={answerInput} className="input" />
  );

  const renderSaveAnswer = () => (
    <button type="button" onClick={onSubmitAnswer} className="save-answer">
      Save Answer
    </button>
  );

  return (
    <div className="problem">
      {renderQuestion(question)}
      <div className="answer-and-save">
        {renderAnswer()}
        {renderSaveAnswer()}
      </div>
    </div>
  );
};

export default Problem;

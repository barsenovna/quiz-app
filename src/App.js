import React, { useEffect, useCallback } from "react";

function App() {
  const [text, setText] = React.useState();
  const [question, setQuestion] = React.useState();

  const getRandomQuestion = useCallback(() => {
    const questions = [
      { question: "2+2=?", answer: "4", type: "open-ended" },
      { question: "3+3=?", answer: "6", type: "open-ended" },
      { question: "22+15=?", answer: "37", type: "open-ended" }
    ];

    return questions[Math.floor(Math.random() * questions.length)];
  }, []);

  useEffect(() => {
    const question = getRandomQuestion();
    setQuestion(question);
  }, [getRandomQuestion]);

  function answerCheck() {
    if (text === question.answer) {
      alert("Correct");
    } else {
      alert("Incorrect");
    }

    //
    setQuestion(getRandomQuestion());
    // setQuestion(questions[Math.floor(Math.random() * questions.length)]);
    setText("");
  }

  if (!question) {
    return <div>Loading</div>;
  }

  console.log(text);

  return (
    <div>
      <div>{question.question}</div>
      <input
        onChange={event => {
          setText(event.target.value);
        }}
        //
        value={text}
      />
      <button
        onClick={() => {
          setText("");
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          answerCheck();
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

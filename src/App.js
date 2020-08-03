import React, { useEffect, useCallback } from "react";

function App() {
  const [text, setText] = React.useState();
  const [question, setQuestion] = React.useState();

  const getRandomQuestion = useCallback(() => {
    const questions = [
      { question: "2+2=?", answer: "4", type: "open-ended" },
      { question: "3+3=?", answer: "6", type: "open-ended" },
      { question: "22+15=?", answer: "37", type: "open-ended" },
      { question: "select number", answer: "three hundred", type: "multiple choice"}
    ];

    return questions[Math.floor(Math.random() * questions.length)];
  }, []);

  useEffect(() => {
    const question = getRandomQuestion();
    setQuestion(question);
    console.log("question is: ", question)
  }, [getRandomQuestion]);

  function answerCheck() {
    console.log("question.answer is", question.answer)
    console.log("question.answer is", text)
    if (text === question.answer) {
      alert("Correct");
      setQuestion(getRandomQuestion());
    } else {
      alert("Incorrect");
    }
    setText("");
  }

  function getAnswerField() {
    if (question.type === "open-ended") {
      return <input
        onChange={event => {
          setText(event.target.value);
        }}
        //
        value={text}
      />
    } else {
      return <div>
        <select name = "mChoise" id="mChoise" value = {text} onChange={event => {
          setText(event.target.value);
        }}>
          <option defaultValue> -- select an option -- </option>
          <option value="three hundred" >Three Hundred</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
        </select>
      </div>
    }
  }

  if (!question) {
    return <div>Loading</div>;
  }

  

  return (
    <div>
      <div>{question.question}</div>
      {getAnswerField()}
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
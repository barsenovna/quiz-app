import React from "react";
import "./App.css";

function App() {
  // const [state, setState] = useState();
  const [text, setText] = React.useState();
  const questions = [ 
    {question: "2+2=?", answer: "4", type: "open-ended"},
    {question: "3+3=?", answer: "6", type: "open-ended"},
    {question: "22+15=?", answer: "37", type: "open-ended"},
  ];
  const randomQuestion =
  questions[Math.floor(Math.random() * questions.length)];

  const [question, setQuestion] = React.useState(randomQuestion);

  // function getRandomQuestion() {
  //   var randomIndex = Math.floor(Math.random()*questions.length);
  //   randomQuestion = questions[randomIndex]
  // }
  
  // useEffect(() => {

  //   return randomQuestion.getRandomQuestion().then((value) => setState(value));

  // }, [])
  
  function answerCheck() {
    if (text === question.answer) {
      alert("Correct");
    } else {
      alert("Incorrect");
    }

    setQuestion(questions[Math.floor(Math.random() * questions.length)]);
    console.log('text is ', text)
    setText("")
    console.log('text is ', text)

  }
  

  return (
    <div>
      <div>
        {question.question}
      </div>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></input>
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
          setText("")
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
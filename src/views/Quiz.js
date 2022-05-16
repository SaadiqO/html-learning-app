import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { db } from "../database/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";
import "../css/CardStyling.css";

export default function Quizzer() {
  const [currentQ, setCurrentQ] = useState(0);
  const [displayResult, setDisplayResult] = useState(false);
  const [result, setResult] = useState(0);
  const [q1, setQ1] = useState(false);
  const collectionRef = collection(db, "quiz");
  const { currentUser } = useAuth();
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  const handleStart = () => {
    setQ1(true);
    setTimerOn(true);
  };

  const resultHandle = (isCorrect) => {
    if (isCorrect) {
      setResult(result + 1);
    }

    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setDisplayResult(true);
      setTimerOn(false);
      const minutes = Math.floor((time / 60000) % 60);
      const seconds = Math.floor((time / 1000) % 60);

      let timeValue;
      if (seconds < 10) {
        timeValue = "0" + minutes + ":0" + seconds;
      } else if (minutes < 10) {
        timeValue = "0" + minutes + ":" + seconds;
      } else {
        timeValue = minutes + ":" + seconds;
      }
      addDoc(collectionRef, {
        score: result,
        uid: currentUser.uid,
        time: timeValue,
      });
    }
  };
  return (
    <>
      <h2 className="text-center mb-4">Quiz</h2>
      <div className="align--card">
        <Card className="cardStyle">
          <Card.Body>
            <div className="Test20">
              <div id="display">
                <span>
                  {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                </span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
              </div>
            </div>
            <div id="buttons"></div>
            {q1 === false ? (
              <Button className="w-100 " type="button" onClick={handleStart}>
                Start
              </Button>
            ) : (
              q1 === true && (
                <div>
                  {displayResult ? (
                    <div className="score-section">
                      You scored {result} out of {questions.length}
                    </div>
                  ) : (
                    <div>
                      <div className="question-section">
                        <div className="question-count">
                          <span>Question {currentQ + 1}</span>/
                          {questions.length}
                        </div>
                        <div className="question-text">
                          {questions[currentQ].questionText}
                        </div>
                      </div>
                      <div className="answer-section">
                        {questions[currentQ].answerOptions.map(
                          (answerOption) => (
                            <Button
                              className="btn--ans"
                              onClick={() =>
                                resultHandle(answerOption.isCorrect)
                              }
                            >
                              {answerOption.answerText}
                            </Button>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

const questions = [
  {
    questionText: "What does HTML stand for?",
    answerOptions: [
      { answerText: "Home tool Markup Language", isCorrect: false },
      { answerText: "Hyperlinks and Text Markup Language", isCorrect: false },
      { answerText: "Hyper Text Markup Language", isCorrect: true },
    ],
  },
  {
    questionText: "Choose the correct HTML element for the largest heading:",
    answerOptions: [
      { answerText: "<head>", isCorrect: false },
      { answerText: "<h1>", isCorrect: true },
      { answerText: "<h6>", isCorrect: false },
      { answerText: "<heading>", isCorrect: false },
    ],
  },
  {
    questionText:
      "What is the correct HTML element for inserting a line break?",
    answerOptions: [
      { answerText: "<break>", isCorrect: false },
      { answerText: "<br>", isCorrect: true },
      { answerText: "<lb>", isCorrect: false },
      { answerText: "<breakline>", isCorrect: false },
    ],
  },
  {
    questionText: "Choose the correct HTML element to define important text",
    answerOptions: [
      { answerText: "<b>", isCorrect: false },
      { answerText: "<important>", isCorrect: false },
      { answerText: "<i>", isCorrect: false },
      { answerText: "<strong>", isCorrect: true },
    ],
  },
  {
    questionText: "Choose the correct HTML element to define important text",
    answerOptions: [
      { answerText: "<", isCorrect: false },
      { answerText: "/", isCorrect: true },
      { answerText: "*", isCorrect: false },
      { answerText: "^", isCorrect: false },
    ],
  },
  {
    questionText: "Which of these elements are all <table> elements?",
    answerOptions: [
      { answerText: "<table><head><tfoot>", isCorrect: false },
      { answerText: "<table><tr><tt>", isCorrect: false },
      { answerText: "<thead><body><tr>", isCorrect: false },
      { answerText: "<table><tr><td>", isCorrect: true },
    ],
  },
  {
    questionText: "How can you make a numbered list?",
    answerOptions: [
      { answerText: "<dl>", isCorrect: false },
      { answerText: "<ul>", isCorrect: false },
      { answerText: "<ol>", isCorrect: true },
      { answerText: "<list>", isCorrect: false },
    ],
  },
  {
    questionText: "How can you make a bulleted list?",
    answerOptions: [
      { answerText: "<dl>", isCorrect: false },
      { answerText: "<ol>", isCorrect: false },
      { answerText: "<list>", isCorrect: false },
      { answerText: "<ul>", isCorrect: true },
    ],
  },
  {
    questionText: "Which HTML element defines the title of a document?",
    answerOptions: [
      { answerText: "<meta", isCorrect: false },
      { answerText: "<title>", isCorrect: true },
      { answerText: "<head>", isCorrect: false },
    ],
  },
  {
    questionText:
      "In HTML, which attribute is used to specify that an input field must be filled out?",
    answerOptions: [
      { answerText: "formvalidate", isCorrect: false },
      { answerText: "placeholder", isCorrect: false },
      { answerText: "validate", isCorrect: false },
      { answerText: "required", isCorrect: true },
    ],
  },
];

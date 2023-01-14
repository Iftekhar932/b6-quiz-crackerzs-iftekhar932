import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";

const Quizzes = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      {data.data.questions.map((quiz, index) => (
        <SingleQuiz quiz={quiz} key={index}></SingleQuiz>
      ))}
    </div>
  );
};

export default Quizzes;

/* 
// 20230114191109
// https://openapi.programming-hero.com/api/quiz/1

{
  "status": true,
  "data": {
    "total": 8,
    "id": 1,
    "name": "React",
    "logo": "https://live.staticflickr.com/65535/52413593240_e00326e727_o.png",
    "questions": [
      {
        "options": [
          "building  User Interface",
          "building Database",
          "building User Data Flow",
          "building  Shop"
        ],
        "id": "632800dfb0e009073fe05300",
        "question": "<p>React is mainly used&nbsp;for _______ (if needed, google it)</p>",
        "correctAnswer": "building  User Interface"
      },
      {
        "options": [
          "class  = “myClass”",
          "Class = “myClass”",
          "className = “myClass”",
          "I don’t know"
        ],
        "id": "632800dfb0e009073fe05301",
        "question": "<p>How do you declare a class called “myClass” in react?</p>",
        "correctAnswer": "className = “myClass”"
      },
      {
        "options": [
          "filter",
          "find",
          "map",
          "for"
        ],
        "id": "632800dfb0e009073fe05302",
        "question": "<p>Which method will you use in react to display components for each object in an array?</p>",
        "correctAnswer": "map"
      },
      {
        "options": [
          "const { name, setName } =  useState(“JingaLala”);",
          "[name, setName] =  UseState(“JingaLala”);",
          "const ( name, setName ) =  useState(“JingaLala”);",
          "const [name, setName] =  useState(“JingaLala”);"
        ],
        "id": "632800dfb0e009073fe05303",
        "question": "<p>How will create a state with a default value “JingaLala”?</p>",
        "correctAnswer": "const [name, setName] =  useState(“JingaLala”);"
      },
      {
        "options": [
          "We  should use class instead of className",
          "class is a reserved keyword in javascript",
          "We can use any name "
        ],
        "id": "632800dfb0e009073fe05304",
        "question": "<p>Why can’t we declare a class with the “class” keyword in React?</p>",
        "correctAnswer": "class is a reserved keyword in javascript"
      },
      {
        "options": [
          "Javascript Html ",
          "Javascript XML",
          "React XML",
          "Javascript Http"
        ],
        "id": "632800dfb0e009073fe05305",
        "question": "<p>What is&nbsp;&nbsp;JSX?</p>",
        "correctAnswer": "Javascript XML"
      },
      {
        "options": [
          "Uppercase",
          "Lowercase",
          "I can use Both"
        ],
        "id": "632800dfb0e009073fe05306",
        "question": "<p>When creating a component in React, the first letter of that function name should be in ____</p>",
        "correctAnswer": "Uppercase"
      },
      {
        "options": [
          "function  nayika() { return <h3>Mousumi </h3>}",
          "function  Nokiya()  [ return <h3> Mousumi <h3> ]",
          "function  Nayika() ( return <h3> Mousumi </h3> )",
          "function  Nayika() { return <h3> Mousumi </h3>   }"
        ],
        "id": "632800dfb0e009073fe05308",
        "question": "<p>What is the correct way of creating a component in react?</p>",
        "correctAnswer": "function  Nayika() { return <h3> Mousumi </h3>   }"
      }
    ]
  }
}

*/

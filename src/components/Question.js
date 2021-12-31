import React from "react";
import {
  QuestionButton,
  QuestionContainer,
  QuestionDescription,
  QuestionTitle,
  QuestionChoice, 
  QuestionNumber,
  QuestionNumberContainer,   
} from "./Question.styles";

function Question({ question }) {  
  return (
    <QuestionContainer>
        <QuestionNumberContainer>
          QUESTION
          <QuestionNumber>0013</QuestionNumber>
        </QuestionNumberContainer>
      <QuestionTitle>{question?.title}</QuestionTitle>
      <QuestionDescription>{question?.content}</QuestionDescription>     
      {
      /*
      Object.keys(question?.choices).map(function(key) {
        return <QuestionChoice key={key}>{question?.choices[key]}</QuestionChoice>;
      })
      */
      } 
      <QuestionChoice>Habana</QuestionChoice>
      <QuestionChoice>Miami</QuestionChoice>
      <QuestionChoice>Madrid</QuestionChoice>
      <QuestionButton>SUBMIT MY ANSWER</QuestionButton>
      <QuestionButton>I'M DONE</QuestionButton>
    </QuestionContainer>    
  );
}

export default Question;
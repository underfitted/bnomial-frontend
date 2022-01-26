import React from "react";
import {
  QuestionButton,
  QuestionDescription,
  QuestionTitle,
  QuestionChoice,
  QuestionNumber,
  QuestionNumberContainer,
} from "./Question.styles";
import { Question as QuestionType } from '../types';

function Question({ question }: { question?: QuestionType }) {
  return (
    <>
      <QuestionNumberContainer>
        QUESTION
        <QuestionNumber>0013</QuestionNumber>
      </QuestionNumberContainer>

      <QuestionTitle>Capital of Spain</QuestionTitle>
      <QuestionDescription>Marry is traveling to Spain for her vacation. She is wondering which of the following cities is the capital of Spain?</QuestionDescription>
      
      <QuestionChoice>Habana</QuestionChoice>
      <QuestionChoice>Miami</QuestionChoice>
      <QuestionChoice>Madrid</QuestionChoice>

      <QuestionButton>SUBMIT MY ANSWER</QuestionButton>
      <QuestionButton>I'M DONE</QuestionButton>

      {
      /*
      <QuestionTitle>{question?.title}</QuestionTitle>
      <QuestionDescription>{question?.content}</QuestionDescription>
      Object.keys(question?.choices).map(function(key) {
        return <QuestionChoice key={key}>{question?.choices[key]}</QuestionChoice>;
      })
      */
      }
    </>    
  );
}

export default Question;

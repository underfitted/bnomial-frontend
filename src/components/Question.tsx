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
    </>
  );
}

export default Question;

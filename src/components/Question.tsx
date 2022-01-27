import React from "react";
import {
    QuestionButton,
    QuestionDescription,
    QuestionTitle,
    QuestionChoice,
    QuestionNumber,
    QuestionNumberContainer,
} from "./Question.styles";
import { Question as QuestionType } from "../types";

function Question({ question }: { question?: QuestionType }) {
    return (
        <>
            <QuestionNumberContainer>
                QUESTION
                <QuestionNumber>{question?.id}</QuestionNumber>
            </QuestionNumberContainer>

            <QuestionTitle>{question?.title}</QuestionTitle>
            <QuestionDescription>{question?.content}</QuestionDescription>

            {Object.getOwnPropertyNames(question?.choices || {}).map((key: string) => (
                <QuestionChoice key={key}>{question?.choices[key]}</QuestionChoice>
            ))}

            <QuestionButton>SUBMIT MY ANSWER</QuestionButton>
            <QuestionButton>I&apos;M DONE</QuestionButton>
        </>
    );
}

export default Question;

import React from "react";
import {
    QuestionNumberContainer,
    QuestionNumber,
    QuestionTitle,
    QuestionDescription,
    QuestionChoiceContainer,
    QuestionChoice,
    QuestionButtonContainer,
    QuestionButton,
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

            <QuestionChoiceContainer>
                {Object.getOwnPropertyNames(question?.choices || {}).map((key: string) => (
                    <QuestionChoice highlighted={false} key={key}>{question?.choices[key]}</QuestionChoice>
                ))}
            </QuestionChoiceContainer>

            <QuestionButtonContainer>
                <QuestionButton>&gt; SUBMIT MY ANSWER</QuestionButton>
                <QuestionButton>✓ I&apos;M DONE</QuestionButton>
            </QuestionButtonContainer>
        </>
    );
}

export default Question;

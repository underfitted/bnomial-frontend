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
    const [selectedAnswer, setSelectedAnswer] = React.useState<string | null>(null);

    return (
        <>
            <QuestionNumberContainer>
                QUESTION
                <QuestionNumber>{question?.id}</QuestionNumber>
            </QuestionNumberContainer>

            <QuestionTitle>{question?.title}</QuestionTitle>
            <QuestionDescription>{question?.content}</QuestionDescription>

            <QuestionChoiceContainer>
                {Object.getOwnPropertyNames(question?.choices || {}).map((answerId: string) => (
                    <QuestionChoice
                        highlighted={selectedAnswer === answerId}
                        key={answerId}
                        onClick={() => setSelectedAnswer(answerId)}>
                        {question?.choices[answerId]}
                    </QuestionChoice>
                ))}
            </QuestionChoiceContainer>

            {selectedAnswer && (
                <QuestionButtonContainer>
                    <QuestionButton>&gt; SUBMIT MY ANSWER</QuestionButton>
                    <QuestionButton>✓ I&apos;M DONE</QuestionButton>
                </QuestionButtonContainer>
            )}
        </>
    );
}

export default Question;

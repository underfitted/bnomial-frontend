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

type Props = {
    question: QuestionType;
    onSubmit: (answer: string) => void;
};

const Question = ({ question, onSubmit }: Props) => {
    const [selectedAnswer, setSelectedAnswer] = React.useState<string | null>(null);

    return (
        <>
            <QuestionNumberContainer>
                QUESTION
                <QuestionNumber>{question.id}</QuestionNumber>
            </QuestionNumberContainer>

            <QuestionTitle>{question.title}</QuestionTitle>
            <QuestionDescription>{question.content}</QuestionDescription>

            <QuestionChoiceContainer>
                {Object.getOwnPropertyNames(question.choices).map((answerId: string) => (
                    <QuestionChoice
                        highlighted={selectedAnswer === answerId}
                        key={answerId}
                        onClick={() => setSelectedAnswer(answerId)}>
                        {question.choices[answerId]}
                    </QuestionChoice>
                ))}
            </QuestionChoiceContainer>

            {selectedAnswer && (
                <QuestionButtonContainer>
                    <QuestionButton onClick={() => onSubmit(selectedAnswer)}>&gt; SUBMIT MY ANSWER</QuestionButton>
                    <QuestionButton>✓ I&apos;M DONE</QuestionButton>
                </QuestionButtonContainer>
            )}
        </>
    );
};

export default Question;

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
    compact?: boolean;
};

const Question = ({ question, onSubmit, compact = false }: Props) => {
    const [selectedAnswer, setSelectedAnswer] = React.useState<string | null>(null);

    return (
        <>
            {!compact ? (
                <QuestionNumberContainer>
                    QUESTION
                    <QuestionNumber>{question.id}</QuestionNumber>
                </QuestionNumberContainer>
            ) : null}

            <QuestionTitle>{question.title}</QuestionTitle>
            <QuestionDescription>{question.content}</QuestionDescription>

            <QuestionChoiceContainer compact={compact}>
                {Object.getOwnPropertyNames(question.choices).map((answerId: string) => (
                    <QuestionChoice
                        highlighted={selectedAnswer === answerId}
                        key={answerId}
                        compact={compact}
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

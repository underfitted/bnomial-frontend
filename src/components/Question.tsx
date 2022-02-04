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
    onSubmit: (answers: string[]) => void;
    compact?: boolean;
};

const Question = ({ question, onSubmit, compact = false }: Props) => {
    const [selectedAnswers, setSelectedAnswers] = React.useState<string[]>([]);

    const toggleAnswer = (answerId: string) => {
        if (selectedAnswers.includes(answerId)) {
            setSelectedAnswers(selectedAnswers.filter(id => id !== answerId));
        } else {
            setSelectedAnswers([...selectedAnswers, answerId]);
        }
    };

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
                        highlighted={selectedAnswers.includes(answerId)}
                        key={answerId}
                        compact={compact}
                        onClick={() => toggleAnswer(answerId)}>
                        {question.choices[answerId]}
                    </QuestionChoice>
                ))}
            </QuestionChoiceContainer>

            {selectedAnswers.length > 0 && (
                <QuestionButtonContainer>
                    <QuestionButton onClick={() => onSubmit(selectedAnswers)}>&gt; SUBMIT MY ANSWER</QuestionButton>
                    <QuestionButton>✓ I&apos;M DONE</QuestionButton>
                </QuestionButtonContainer>
            )}
        </>
    );
};

export default Question;

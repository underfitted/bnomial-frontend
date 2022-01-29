import { render, screen } from "@testing-library/react";

import { Question as QuestionType } from "../types";
import Question from "./Question";

describe("Question", () => {
    test("shows the title and description", () => {
        const question = buildQuestion({
            title: "What is the capital of France?",
            content: "The capital of France is Paris.",
        });

        render(<Question question={question} />);

        expect(screen.getByText(question.title)).toBeInTheDocument();
        expect(screen.getByText(question.content)).toBeInTheDocument();
    });
});

const buildQuestion = (values?: Partial<QuestionType>): QuestionType => ({
    id: 'abc',
    title: "What is the capital of France?",
    content: "The capital of France is Paris.",
    choices: {
        A: "Paris",
        B: "London",
        C: "Berlin",
        D: "Madrid",
    },
    ...(values || {}),
});
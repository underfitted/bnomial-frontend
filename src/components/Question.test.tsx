import { render, screen } from "@testing-library/react";

import Question from "./Question";

describe("Question", () => {
    test("shows the title and description", () => {
        const question = {
            id: 'abc',
            title: "What is the capital of France?",
            content: "The capital of France is Paris.",
            choices: {
                A: "Paris",
                B: "London",
                C: "Berlin",
                D: "Madrid",
            },
        };

        render(<Question question={question} />);

        expect(screen.getByText(question.title)).toBeInTheDocument();
        expect(screen.getByText(question.content)).toBeInTheDocument();
    });
});

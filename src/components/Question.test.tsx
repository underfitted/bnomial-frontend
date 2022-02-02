import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { buildQuestion } from "../testHelper";
import Question from "./Question";

describe("Question", () => {
    test("shows the title and description", () => {
        const question = buildQuestion({
            title: "What is the capital of France?",
            content: "The capital of France is Paris.",
        });

        render(<Question question={question} onSubmit={jest.fn()} />);

        expect(screen.getByText(question.title)).toBeInTheDocument();
        expect(screen.getByText(question.content)).toBeInTheDocument();
    });

    test("it shows the question choices", () => {
        const question = buildQuestion({
            choices: {
                A: "Paris",
                B: "London",
                C: "Berlin",
                D: "Madrid",
            },
        });

        render(<Question question={question} onSubmit={jest.fn()} />);

        expect(screen.getByText(question.choices.A)).toBeInTheDocument();
        expect(screen.getByText(question.choices.B)).toBeInTheDocument();
        expect(screen.getByText(question.choices.C)).toBeInTheDocument();
        expect(screen.getByText(question.choices.D)).toBeInTheDocument();
    });

    test("it shows the submit button after selecting an answer", () => {
        const question = buildQuestion({
            choices: {
                A: "Paris",
                B: "London",
                C: "Berlin",
                D: "Madrid",
            },
        });

        render(<Question question={question} onSubmit={jest.fn()} />);

        expect(screen.queryByText(/SUBMIT/)).not.toBeInTheDocument();

        userEvent.click(screen.getByText("Paris"));

        expect(screen.getByText(/SUBMIT/)).toBeInTheDocument();
    });

    test("calls onSubmit with selected answer id", () => {
        const question = buildQuestion({
            choices: {
                A: "Paris",
                B: "London",
                C: "Berlin",
                D: "Madrid",
            },
        });
        const onSubmit = jest.fn();

        render(<Question question={question} onSubmit={onSubmit} />);

        userEvent.click(screen.getByText("Berlin"));
        userEvent.click(screen.getByText(/SUBMIT/));

        expect(onSubmit).toHaveBeenCalledWith("C");
    });
});

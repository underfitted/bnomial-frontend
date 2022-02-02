import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { buildQuestion } from "../../testHelper";
import QuizDisplay, { QuizHandler } from "./QuizDisplay";

describe("QuizDisplay", () => {
    test("shows next question returned by handler", async () => {
        const quizHandler: jest.Mocked<QuizHandler> = {
            getNextQuestion: jest.fn(),
            answerQuestion: jest.fn(),
        };
        const firstQuestion = buildQuestion({ title: "What is the capital of France?", choices: { A: "Paris" } });
        const secondQuestion = buildQuestion({ title: "What is the capital of Germany?"});
        quizHandler.getNextQuestion.mockResolvedValueOnce({
            type: "question",
            question: firstQuestion,
        });
        quizHandler.getNextQuestion.mockResolvedValueOnce({
            type: "question",
            question: secondQuestion,
        })
        render(<QuizDisplay quizHandler={quizHandler} />);

        await screen.findByText("What is the capital of France?");

        userEvent.click(screen.getByText("Paris"));
        userEvent.click(screen.getByText(/SUBMIT/));

        expect(quizHandler.answerQuestion).toHaveBeenCalledWith(firstQuestion.id, "A");
        await screen.findByText("What is the capital of Germany?");
    });
});

import React from "react";
import { renderHook } from "@testing-library/react-hooks";

import { buildQuestion, buildMockedApiClient } from "../../testHelper";
import { ApiClient, ApiContext } from "../../api";
import { Question } from "../../types";
import { QuizState } from "./QuizDisplay";

import useSampleQuizHandler from "./useSampleQuizHandler";

describe("useSampleQuizHandler", () => {
    afterEach(() => {
        window.localStorage.clear();
    });

    test("returns all questions once", async () => {
        const sampleQuestions = [buildQuestion(), buildQuestion(), buildQuestion()];
        const mockApiClient = buildMockedApiClient();
        mockApiClient.getSampleQuestions.mockResolvedValue(sampleQuestions);

        const { result } = renderHook(() => useSampleQuizHandler(), {
            wrapper: provideApiClientWrapper(mockApiClient),
        });
        const handler = result.current;

        const receivedQuestions: Question[] = [];

        let question = expectQuestion(await handler.getNextQuestion());
        expect(sampleQuestions).toContain(question);

        receivedQuestions.push(question);
        await handler.answerQuestion(question.id, firstQuestionChoice(question));
        question = expectQuestion(await handler.getNextQuestion());
        expect(sampleQuestions).toContain(question);
        expect(receivedQuestions).not.toContain(question);

        receivedQuestions.push(question);
        await handler.answerQuestion(question.id, firstQuestionChoice(question));
        question = expectQuestion(await handler.getNextQuestion());
        expect(sampleQuestions).toContain(question);
        expect(receivedQuestions).not.toContain(question);

        await handler.answerQuestion(question.id, firstQuestionChoice(question));
        const state = await handler.getNextQuestion();
        expect(state.type).toBe("no_more_questions");
    });

    test("stores answers in local storage", async () => {
        const question = buildQuestion();
        const mockApiClient = buildMockedApiClient();
        mockApiClient.getSampleQuestions.mockResolvedValue([question]);

        const { result } = renderHook(() => useSampleQuizHandler(), {
            wrapper: provideApiClientWrapper(mockApiClient),
        });
        const handler = result.current;

        const answers = firstQuestionChoice(question);
        await handler.answerQuestion(question.id, answers);
        const storedAnswers = JSON.parse(window.localStorage.getItem("sampleQuestionAnswers") as string);

        expect(storedAnswers).toEqual({ [question.id]: answers });
    });

    test("skips questions with stored answers", async () => {
        const skippedQuestion = buildQuestion();
        const mockApiClient = buildMockedApiClient();
        mockApiClient.getSampleQuestions.mockResolvedValue([skippedQuestion]);
        window.localStorage.setItem(
            "sampleQuestionAnswers",
            JSON.stringify({ [skippedQuestion.id]: firstQuestionChoice(skippedQuestion) })
        );

        const { result } = renderHook(() => useSampleQuizHandler(), {
            wrapper: provideApiClientWrapper(mockApiClient),
        });
        const handler = result.current;

        const state = await handler.getNextQuestion();
        expect(state.type).toBe("no_more_questions");
    });
});

const provideApiClientWrapper = (apiClient: ApiClient) => {
    const Wrapper = ({ children }: { children: React.ReactNode }) => (
        <ApiContext.Provider value={apiClient}>{children}</ApiContext.Provider>
    );
    return Wrapper;
};

const firstQuestionChoice = (question: Question) => [Object.keys(question.choices)[0]];

const expectQuestion = (state: QuizState): Question => {
    if (state.type !== "question") {
        throw new Error("Expected state to be a question");
    }
    return state.question;
};

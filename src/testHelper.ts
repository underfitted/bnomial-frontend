import { ApiClient } from "./api";
import { Question } from "./types";

let nextId = 0;

export const buildQuestion = (values?: Partial<Question>): Question => ({
    id: `question-${nextId++}`,
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

export const buildMockedApiClient = (): jest.Mocked<ApiClient> => ({
    getSampleQuestions: jest.fn(),
    getRandomQuestion: jest.fn(),
});

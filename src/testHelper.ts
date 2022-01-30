import { Question } from "./types";

export const buildQuestion = (values?: Partial<Question>): Question => ({
    id: "abc",
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

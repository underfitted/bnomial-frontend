import { Question } from "./types";

let nextId = 0;

const getNextId = (): number => {
    const value = nextId;
    nextId += 1;
    return value;
};

export const buildQuestion = (values?: Partial<Question>): Question => ({
    id: `question-${getNextId()}`,
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

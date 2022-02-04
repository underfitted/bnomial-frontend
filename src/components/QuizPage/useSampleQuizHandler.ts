import React from "react";
import { useApiClient } from "../../api";
import { Question } from "../../types";

import { QuizHandler } from "./QuizDisplay";

const useSampleQuizHandler = (): QuizHandler => {
    const apiClient = useApiClient();

    const result = React.useMemo(() => {
        let sampleQuestions: Question[] | null = null;
        const submittedAnswers: { [questionId: string]: string[] } = getAnswersFromLocalStorage();

        const handler: QuizHandler = {
            getNextQuestion: async () => {
                if (!sampleQuestions) {
                    sampleQuestions = await apiClient.getSampleQuestions();
                }

                const unansweredQuestions = sampleQuestions.filter(
                    (question) => submittedAnswers[question.id] === undefined
                );
                if (unansweredQuestions.length === 0) {
                    return { type: "no_more_questions" };
                }

                const randomIndex = Math.floor(Math.random() * unansweredQuestions.length);
                const question = unansweredQuestions[randomIndex];
                return { type: "question", question };
            },
            answerQuestion: async (questionId, answer) => {
                submittedAnswers[questionId] = answer;
                storeAnswerInLocalStorage(questionId, answer);
            },
        };

        return handler;
    }, [apiClient]);

    return result;
};

const LOCAL_STORAGE_KEY = "sampleQuestionAnswers";

const getAnswersFromLocalStorage = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "{}");

const storeAnswerInLocalStorage = (questionId: string, answer: string[]) => {
    const answers = getAnswersFromLocalStorage();
    answers[questionId] = answer;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(answers));
};

export default useSampleQuizHandler;

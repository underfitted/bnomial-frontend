import React from "react";
import { useApiClient } from "../../api";
import { Question } from "../../types";

import { QuizHandler } from "./QuizDisplay";

const useSampleQuizHandler = (): QuizHandler => {
    const apiClient = useApiClient();

    const result = React.useMemo(() => {
        let sampleQuestions: Question[] | null = null;
        const submittedAnswers: { [questionId: string]: string[] } = getSubmittedAnswersFromLocalStorage();

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
            answerQuestion: async (questionId, answers) => {
                submittedAnswers[questionId] = answers;
                storeAnswersInLocalStorage(questionId, answers);
            },
        };

        return handler;
    }, [apiClient]);

    return result;
};

const LOCAL_STORAGE_KEY = "sampleQuestionAnswers";

const getSubmittedAnswersFromLocalStorage = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "{}");

const storeAnswersInLocalStorage = (questionId: string, answers: string[]) => {
    const submittedAnswers = getSubmittedAnswersFromLocalStorage();
    submittedAnswers[questionId] = answers;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(submittedAnswers));
};

export default useSampleQuizHandler;

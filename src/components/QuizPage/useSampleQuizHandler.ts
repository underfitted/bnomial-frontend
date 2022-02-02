import React from "react";
import { useApiClient } from "../../api";
import { Question } from "../../types";

import { QuizHandler } from "./QuizDisplay";

const useSampleQuizHandler = (): QuizHandler => {
    const apiClient = useApiClient();

    const result = React.useMemo(() => {
        let sampleQuestions: Question[] | null = null;
        const answers: { [questionId: string]: string } = {}; // TODO: Get from Cookies

        const handler: QuizHandler = {
            getNextQuestion: async () => {
                if (!sampleQuestions) {
                    sampleQuestions = await apiClient.getSampleQuestions();
                }

                const unansweredQuestions = sampleQuestions.filter((question) => answers[question.id] === undefined);
                if (unansweredQuestions.length === 0) {
                    return { type: "no_more_questions" };
                }

                const randomIndex = Math.floor(Math.random() * unansweredQuestions.length);
                const question = unansweredQuestions[randomIndex];
                return { type: "question", question };
            },
            answerQuestion: async (questionId, answer) => {
                answers[questionId] = answer;
                storeAnswerInLocalStorage(questionId, answer);
            },
        };

        return handler;
    }, [apiClient]);

    return result;
};

const storeAnswerInLocalStorage = (questionId: string, answer: string) => {
    const answers = JSON.parse(localStorage.getItem("answers") || "{}");
    answers[questionId] = answer;
    localStorage.setItem("answers", JSON.stringify(answers));
};

export default useSampleQuizHandler;

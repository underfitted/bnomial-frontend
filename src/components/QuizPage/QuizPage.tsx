import React from "react";
import { Question as QuestionType } from "../../types";
import { useApiClient } from "../../api";
import QuizDisplay, { QuizHandler } from "./QuizDisplay";

const QuizPage = () => {
    const apiClient = useApiClient();
    const [sampleQuestions, setSampleQuestions] = React.useState<QuestionType[]>();

    React.useEffect(() => {
        (async () => {
            const sampleQuestions = await apiClient.getSampleQuestions();
            setSampleQuestions(sampleQuestions);
        })();
    }, [apiClient]);

    const quizHandler = React.useMemo<QuizHandler>(() => {
        const answers: { [questionId: string]: string } = {}; // TODO: Get from cookie

        return {
            getNextQuestion: async () => {
                if (!sampleQuestions) {
                    return { type: "not_started" };
                }

                const unansweredQuestions = sampleQuestions.filter(question => answers[question.id] === undefined);
                if (unansweredQuestions.length === 0) {
                    return { type: "no_more_questions" };
                }

                const randomIndex = Math.floor(Math.random() * unansweredQuestions.length);
                const question = unansweredQuestions[randomIndex];

                return { type: "question", question };
            },
            answerQuestion: async (questionId, answer) => {
                answers[questionId] = answer;
                // TODO: Save to cookie
            },
        };
    }, [sampleQuestions]);

    if (!sampleQuestions) {
        return <div>Loading...</div>;
    }

    return <QuizDisplay quizHandler={quizHandler} />;
};

export default QuizPage;

import React from "react";
import { Question as QuestionType } from "../../types";
import { useApiClient } from "../../api";
import QuizDisplay, { QuizHandler } from "./QuizDisplay";

const QuizPage = () => {
    const apiClient = useApiClient();
    const [question, setQuestion] = React.useState<QuestionType>();

    React.useEffect(() => {
        (async () => {
            // Load Random Question
            const question = await apiClient.getRandomQuestion();
            setQuestion(question);
        })();
    }, [apiClient]);

    const quizHandler = React.useMemo<QuizHandler>(
        () => ({
            getNextQuestion: async () => {
                if (!question) {
                    return { type: "not_started" };
                }
                return { type: "question", question };
            },
            answerQuestion: async () => {
                // ** TODO
            },
        }),
        [question]
    );

    if (!question) {
        return <div>Loading...</div>;
    }

    return <QuizDisplay quizHandler={quizHandler} />;
};

export default QuizPage;

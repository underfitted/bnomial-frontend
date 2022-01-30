import React from "react";
import { Question as QuestionType } from "../../types";
import { useApiClient } from "../../api";
import Question from "../Question";

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

    if (!question) {
        return <div>Loading...</div>;
    }

    return (
        <Question
            question={question}
            onSubmit={() => {
                /* do nothing yet */
            }}
        />
    );
};

export default QuizPage;

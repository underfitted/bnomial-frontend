import React from "react";
import { Question as QuestionType } from "../../types";
import Question from "../Question";

export type QuizState =
    | { type: "not_started" }
    | { type: "question"; question: QuestionType }
    | { type: "no_more_questions" };

export interface QuizHandler {
    getNextQuestion: () => Promise<QuizState>;
    answerQuestion: (questionId: string, answer: string) => Promise<void>;
}

type Props = {
    quizHandler: QuizHandler;
};

const QuizDisplay = ({ quizHandler }: Props) => {
    const [loading, setLoading] = React.useState(true);
    const [state, setState] = React.useState<QuizState>({ type: "not_started" });

    React.useEffect(() => {
        if (state.type === "not_started") {
            setLoading(true);
            (async () => {
                const initialState = await quizHandler.getNextQuestion();
                setState(initialState);
                setLoading(false);
            })();
        }
    }, [quizHandler, state.type]);

    if (loading || state.type === "not_started") return <div>Loading...</div>;

    if (state.type === "no_more_questions") return <div>No more questions</div>;

    const { question } = state;

    return (
        <Question
            question={question}
            onSubmit={(answer) => {
                (async () => {
                    setLoading(true);
                    await quizHandler.answerQuestion(question.id, answer);
                    const nextState = await quizHandler.getNextQuestion();
                    setState(nextState);
                    setLoading(false);
                })();
            }}
        />
    );
};

export default QuizDisplay;

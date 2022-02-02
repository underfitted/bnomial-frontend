import React from "react";
import QuizDisplay from "./QuizDisplay";
import useSampleQuizHandler from "./useSampleQuizHandler";

const QuizPage = () => {
    const sampleQuizHandler = useSampleQuizHandler();
    // TODO: Use different handler for logged in user

    return <QuizDisplay quizHandler={sampleQuizHandler} />;
};

export default QuizPage;

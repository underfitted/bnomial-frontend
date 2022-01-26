import React from "react";
import { Question as QuestionType } from "../types";
import { useApiClient } from "../api";
import Question from "./Question";

const Quiz = () => {
  const apiClient = useApiClient();
  const [question, setQuestion] = React.useState<QuestionType>();

  React.useEffect(() => {
    (async () => {
      // Load Random Question
      const question = await apiClient.getRandomQuestion();
      setQuestion(question);
    })();
  }, [apiClient]);

  return <Question question={question} />;
};

export default Quiz;

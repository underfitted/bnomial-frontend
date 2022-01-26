import React from "react";
import axios from "axios";
import { Question as QuestionType } from '../types';
import Question from "./Question";

const BACKEND_URL = "https://hv2i83bavj.execute-api.us-east-1.amazonaws.com/prod/";

export const endpoints = {
  random_question: "questions/random",
};

const Home = () => {
  const [question, setQuestion] = React.useState<QuestionType>();

  React.useEffect(() => {
    // Load Random Question
    axios
      .get(`${BACKEND_URL}${endpoints.random_question}`)
      .then((res) => setQuestion(res.data));
  }, []);

  return <Question question={question} />;
};

export default Home;

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Question from "./components/Question";
import Footer from "./components/Footer";
import axios from "axios";

export const endpoints = {
  random_question: "questions/random",
};

const URL = "https://hv2i83bavj.execute-api.us-east-1.amazonaws.com/prod/";

function App() {
  const [randomQuestion, setRandomQuestion] = useState([]);

  useEffect(() => {
    // Load Random Question
    axios
      .get(`${URL}${endpoints.random_question}`)
      .then((res) => setRandomQuestion(res.data));
  }, []);

  return (
    <>
      <Header />   
      <Question question={randomQuestion} />
      <Footer />  
    </>
  );
}

export default App;
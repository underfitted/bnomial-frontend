import React from "react";
import { Question as QuestionType } from "../types";
import { useApiClient } from "../api";
import Question from "./Question";

import Header from "./Header";
import Footer from "./Footer";
import { PageContainer, HeroSection, HeroImage, QuestionSection, QuestionContainer } from "./HomePage.styles";

const HomePage = () => {
    const apiClient = useApiClient();
    const [question, setQuestion] = React.useState<QuestionType>();

    React.useEffect(() => {
        (async () => {
            // Load Random Question
            const question = await apiClient.getRandomQuestion();
            setQuestion(question);
        })();
    }, [apiClient]);

    return (
        <>
            <Header />
            <PageContainer>
                <HeroSection>
                    <div>
                        <h1>Prove your machine learning knowledge</h1>
                        <p>
                            Bnomial let&apos;s you answer machine learning questions, compare yourself to others and
                            create a digital certificate of your knowledge.
                        </p>
                    </div>
                    <HeroImage>
                        <img src="./bnomial-badge-3d.png" alt="The Bnomial achievements badge" />
                    </HeroImage>
                </HeroSection>
                <QuestionSection>
                    <h2>Do you want to give it a try?</h2>
                    <p>Can you answer the following questions?</p>
                    <QuestionContainer>
                        <Question question={question} />
                    </QuestionContainer>
                </QuestionSection>
            </PageContainer>
            <Footer />
        </>
    );
};

export default HomePage;

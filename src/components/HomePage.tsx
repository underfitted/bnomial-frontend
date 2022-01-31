import React from "react";
import { Question as QuestionType } from "../types";
import { useApiClient } from "../api";
import Question from "./Question";

import Header from "./Header";
import Footer from "./Footer";

import { PageContainer } from "./PageLayout.styles";
import {
    HomeContainer,
    HeroSection,
    HeroImage,
    HomeSection,
    QuestionContainer,
    HowItWorksGrid,
} from "./HomePage.styles";

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
        <PageContainer>
            <Header />
            <HomeContainer>
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
                <HomeSection>
                    <h2>Do you want to give it a try?</h2>
                    <p>Can you answer the following question?</p>
                    <QuestionContainer>
                        <Question question={question} compact={true} />
                    </QuestionContainer>
                </HomeSection>
                <HomeSection>
                    <h2>How it works?</h2>
                    <p>Answer questions, compare results to others and get a proof on the blockhain.</p>
                    <HowItWorksGrid>
                        <div>
                            <h3>1. Quiz</h3>
                            <p>
                                Test your machine learning knowledge by answering questions from the quiz. You will not
                                see the answers to the quiz questions yet.
                            </p>
                        </div>
                        <div>
                            <h3>2. Leaderboard</h3>
                            <p>
                                Your answers are evaluated and your performance is compared to other users to determine
                                your position on the leaderboard.
                            </p>
                        </div>
                        <div>
                            <h3>3. NFT badge</h3>
                            <p>
                                If you get enough answers, you will receive an NFT badge as a proof of your performance.
                                The proof is stored on the blockchain.
                            </p>
                        </div>
                    </HowItWorksGrid>
                </HomeSection>
            </HomeContainer>
            <Footer />
        </PageContainer>
    );
};

export default HomePage;

import Header from "./Header";
import Footer from "./Footer";
import { PageContainer, HeroContainer, HeroImage, QuestionContainer } from "./HomePage.styles";

const HomePage = () => {
    return (
        <>
            <Header />
            <PageContainer>
                <HeroContainer>
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
                </HeroContainer>
            </PageContainer>
            <Footer />
        </>
    );
};

export default HomePage;

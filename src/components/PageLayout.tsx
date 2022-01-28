import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import { PageBody, PageContainer } from "./PageLayout.styles";

const PageLayout = () => {
    return (
        <PageContainer>
            <Header />
            <PageBody>
                <Outlet />
            </PageBody>
            <Footer />
        </PageContainer>
    );
};

export default PageLayout;

import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import { PageBody, PageCointainer } from "./PageLayout.styles";

const PageLayout = () => {
    return (
        <PageCointainer>
            <Header />
            <PageBody>
                <Outlet />
            </PageBody>
            <Footer />
        </PageCointainer>
    );
};

export default PageLayout;

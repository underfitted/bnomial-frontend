import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import { PageBody } from "./PageLayout.styles";

const PageLayout = () => {
    return (
        <>
            <Header />
            <PageBody>
                <Outlet />
            </PageBody>
            <Footer />
        </>
    );
};

export default PageLayout;

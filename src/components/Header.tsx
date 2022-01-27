import { useLocation, Link } from "react-router-dom"
import { HeaderContainer, Button } from "./Header.styles"

import { Page, currentPage, pathForPage } from "../pages"

const buttons: { name: string; page: Page }[] = [
    { name: "HOME", page: "home" },
    { name: "QUIZ", page: "quiz" },
    { name: "PRACTICE", page: "practice" },
    { name: "HOW IT WORKS", page: "how_it_works" },
    { name: "LEADERBOARD", page: "leaderboard" },
    { name: "ABOUT", page: "about" },
    { name: "LOGIN", page: "login" },
]

function Header() {
    const location = useLocation()

    return (
        <HeaderContainer>
            {buttons.map(({ name, page }) => (
                <Link key={name} to={pathForPage(page)}>
                    <Button highlighted={currentPage(location) === page}>{name}</Button>
                </Link>
            ))}
        </HeaderContainer>
    )
}

export default Header

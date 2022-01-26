import { useLocation, Link } from "react-router-dom";
import { HeaderContainer, Button } from "./Header.styles";

import { Page, currentPage, pathForPage } from "../pages";

const buttons: { name: string, page: Page }[] = [
  { name: "LET'S GO", page: "home" },
  { name: "LEADERBOARD", page: "leaderboard" },
  { name: "YESTERDAYS", page: "yesterdays" },
  { name: "HOW IT WORKS", page: "how_it_works" },
  { name: "CONTRIBUTE", page: "contribute" },
];

function Header() {
  const location = useLocation();

  return (
    <HeaderContainer>
      {buttons.map(({ name, page }) => (
        <Link to={pathForPage(page)}>
          <Button highlighted={currentPage(location) === page}>{name}</Button>
        </Link>
      ))}
    </HeaderContainer>
  );
}

export default Header;

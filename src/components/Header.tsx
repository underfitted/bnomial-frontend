import { useLocation, Link } from "react-router-dom";
import { HeaderContainer, Button } from "./Header.styles";

const buttons = [
  { name: "LET'S GO", to: "/" },
  { name: "LEADERBOARD", to: "/leaderboard" },
  { name: "YESTERDAYS", to: "/yesterdays" },
  { name: "HOW IT WORKS", to: "/how_it_works" },
  { name: "CONTRIBUTE", to: "/contribute" },
];

function Header() {
  const location = useLocation();

  return (
    <HeaderContainer>
      {buttons.map(({ name, to }) => (
        <Link to={to}>
          <Button highlighted={location.pathname === to}>{name}</Button>
        </Link>
      ))}
    </HeaderContainer>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import {
  HeaderContainer,
  HeaderButton,
  HeaderActiveButton,
} from "./Header.styles";

function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 100) {
        setIsDark(true);
      } else setIsDark(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <HeaderContainer dark={isDark}>
      <HeaderActiveButton>LET'S GO</HeaderActiveButton>
      <HeaderButton>LEADERBOARD</HeaderButton>
      <HeaderButton>YESTERDAYS</HeaderButton>
      <HeaderButton>HOW IT WORKS</HeaderButton>
      <HeaderButton>CONTRIBUTE</HeaderButton>
    </HeaderContainer>
  );
}

export default Header;

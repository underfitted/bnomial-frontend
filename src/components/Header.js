import React, { useState, useEffect } from "react";
import { 
  HeaderContainer, 
  HeaderButton,
  HeaderActiveButton
} from "./Header.styles";

function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsDark(true);
      } else setIsDark(false);
    });

    return () => {
      window.removeEventListener("scroll");
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
import React, { useState, useEffect } from "react";
import { 
    FooterContainer, 
} from "./Footer.styles";

function Footer() {
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
    <FooterContainer dark={isDark}>
     <img
        src="./logo.png"
        alt=""
      />
    </FooterContainer>
  );
}

export default Footer;
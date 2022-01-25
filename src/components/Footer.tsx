import React, { useState, useEffect } from "react";
import { FooterContainer } from "./Footer.styles";

function Footer() {
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
    <FooterContainer dark={isDark}>
      <img src="./logo.png" alt="" />
    </FooterContainer>
  );
}

export default Footer;

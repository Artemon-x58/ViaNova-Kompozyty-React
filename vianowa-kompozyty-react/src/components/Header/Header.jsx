import { useState, useEffect } from "react";
import Icons from "../../icons/sprite.svg";
import { BurgerButtonOpen } from "../BurgerButtonOpen/BurgerButtonOpen.jsx";
import { Container } from "../Container/Container.jsx";
import { Navigation } from "../Navigation/Navigation.jsx";
import {
  HeaderStyled,
  HeaderWrapper,
  HeaderWrapperRow,
  LogoHeaderLink,
  LogoHeaderSvg,
} from "./Header.styled";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("no-scroll", !isMenuOpen);
  };

  useEffect(() => {
    document.body.classList.remove("no-scroll");
  }, [location]);

  return (
    <HeaderStyled location={location.pathname}>
      <HeaderWrapperRow>
        <Container>
          <HeaderWrapper>
            <LogoHeaderLink to={"/"}>
              <LogoHeaderSvg>
                <use href={`${Icons}#icon-logo`}></use>
              </LogoHeaderSvg>
            </LogoHeaderLink>
            <Navigation isOpen={isMenuOpen} onClick={toggleMenu} />
            <BurgerButtonOpen onClick={toggleMenu} />
          </HeaderWrapper>
        </Container>
      </HeaderWrapperRow>
    </HeaderStyled>
  );
};

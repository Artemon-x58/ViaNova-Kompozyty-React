import { useState } from "react";
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

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("no-scroll", !isMenuOpen);
  };

  return (
    <HeaderStyled>
      <HeaderWrapperRow>
        <Container>
          <HeaderWrapper>
            <LogoHeaderLink>
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

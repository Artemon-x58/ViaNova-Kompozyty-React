import { Container } from "../Container/Container.jsx";
import {
  HeaderStyled,
  HeaderWrapper,
  HeaderWrapperRow,
  LogoHeaderLink,
  LogoHeaderSvg,
} from "./Header.styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderWrapperRow>
        <Container>
          <HeaderWrapper>
            <LogoHeaderLink>
              <LogoHeaderSvg>
                <use href="../../icons/sprite.svg#icon-logo"></use>
              </LogoHeaderSvg>
            </LogoHeaderLink>
          </HeaderWrapper>
        </Container>
      </HeaderWrapperRow>
    </HeaderStyled>
  );
};

import { Container } from "../Container/Container.jsx";
import { HeaderStyled, HeaderWrapper, HeaderWrapperRow } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderWrapperRow>
        <Container>
          <HeaderWrapper></HeaderWrapper>
        </Container>
      </HeaderWrapperRow>
    </HeaderStyled>
  );
};

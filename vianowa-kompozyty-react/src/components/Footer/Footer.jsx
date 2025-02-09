import { footerInfoArr, footerProductsArr } from "../../data/data";
import { Address } from "../Address/Address";
import { Container } from "../Container/Container";
import { FooterList } from "../FooterList/FooterList";
import { FooterListTitle } from "../FooterList/FooterList.styled";
import { FooterLogo } from "../FooterLogo/FooterLogo";
import { FooterSocialsList } from "../FooterSocialsList/FooterSocialsList";
import {
  FooterContactsWrapper,
  FooterInfoAndContactsWrapper,
  FooterInfoWrapper,
  FooterKopyright,
  FooterStyled,
  FooterWrapper,
} from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <FooterWrapper>
          <FooterLogo />
          <FooterInfoAndContactsWrapper>
            <FooterInfoWrapper>
              <FooterList arr={footerProductsArr} title={"PRODUKTY"} />
              <FooterList arr={footerInfoArr} title={"POLITYKA FIRMY"} />
            </FooterInfoWrapper>
            <FooterContactsWrapper>
              <div>
                <FooterListTitle>KONTAKT</FooterListTitle>
                <Address format={"footer"} />
              </div>
              <FooterSocialsList />
            </FooterContactsWrapper>
          </FooterInfoAndContactsWrapper>
        </FooterWrapper>
        <FooterKopyright>
          © 2025 vianova-kompozyty.pl | Wszelkie prawa zastrzeżone
        </FooterKopyright>
      </Container>
    </FooterStyled>
  );
};

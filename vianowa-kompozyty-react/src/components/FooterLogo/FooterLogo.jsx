import Icon from "../../icons/sprite.svg";
import {
  FooterLogoLink,
  FooterLogoSvg,
  FooterLogoWrapper,
  FooterTitle,
} from "./FooterLogo.styled";

export const FooterLogo = () => {
  return (
    <FooterLogoWrapper>
      <FooterLogoLink href="/">
        <FooterLogoSvg>
          <use href={`${Icon}#icon-logo`}></use>
        </FooterLogoSvg>
      </FooterLogoLink>
      <FooterTitle>
        ViaNova
        <br />
        Kompozyty
      </FooterTitle>
    </FooterLogoWrapper>
  );
};

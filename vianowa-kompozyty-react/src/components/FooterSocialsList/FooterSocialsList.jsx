import Icon from "../../icons/sprite.svg";
import { footerSocialListIcons } from "../../data/data";
import { FooterListTitle } from "../FooterList/FooterList.styled";
import {
  FooterSocialItem,
  FooterSocialLink,
  FooterSocialListStyle,
  FooterSocialsListWrapper,
  FooterSocialSvg,
} from "./FooterSocialsList.styled";

export const FooterSocialsList = () => {
  return (
    <FooterSocialsListWrapper>
      <FooterListTitle>SOCIAL MEDIA</FooterListTitle>
      <FooterSocialListStyle>
        {footerSocialListIcons.map(({ name }) => (
          <FooterSocialItem key={name}>
            <FooterSocialLink target="_blank">
              <FooterSocialSvg>
                <use href={`${Icon}#${name}`}></use>
              </FooterSocialSvg>
            </FooterSocialLink>
          </FooterSocialItem>
        ))}
      </FooterSocialListStyle>
    </FooterSocialsListWrapper>
  );
};

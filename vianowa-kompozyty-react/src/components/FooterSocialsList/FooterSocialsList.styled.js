import styled from "styled-components";

export const FooterSocialsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterSocialListStyle = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const FooterSocialItem = styled.li``;

export const FooterSocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 15px;

  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  color: #f0dfcc;
  line-height: 1.7;

  transition: color 0.2s ease-in;

  &:hover,
  &:focus {
    color: var(--accent);
  }
`;

export const FooterSocialSvg = styled.svg`
  width: 20px;
  height: 20px;
  fill: #f0dfcc;

  transition: fill 0.2s ease-in;

  &&:hover,
  &:focus {
    fill: var(--accent);
  }
`;

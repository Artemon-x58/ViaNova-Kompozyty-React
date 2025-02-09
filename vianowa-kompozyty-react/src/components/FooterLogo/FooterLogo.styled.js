import styled from "styled-components";

export const FooterLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 30px;

  @media screen and (min-width: 1200px) {
    gap: 20px;
    margin-right: 25px;
    margin-bottom: 30px;
  }
`;

export const FooterLogoLink = styled.a``;

export const FooterLogoSvg = styled.svg`
  width: 150px;
  height: 80px;
  fill: var(--accent);
`;

export const FooterTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  color: #f0dfcc;
  font-weight: 700;
  font-size: 26px;
  letter-spacing: 0.05em;
`;

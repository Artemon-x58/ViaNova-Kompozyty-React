import styled from "styled-components";

export const BurgerButtonOpenStyled = styled.button`
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const BurgerButtonOpenSvg = styled.svg`
  width: 32px;
  height: 32px;
  fill: var(--accent);
`;

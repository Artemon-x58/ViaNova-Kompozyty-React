import styled from "styled-components";

export const BurgerButtonCloseStyled = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const BurgerButtonCloseSvg = styled.svg`
  width: 32px;
  height: 32px;
  fill: #e74545;
`;

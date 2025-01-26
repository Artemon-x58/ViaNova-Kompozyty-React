import styled from "styled-components";

export const ContainerStyled = styled.div`
  max-width: 520px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 768px) {
    max-width: 808px;
  }

  @media (min-width: 1200px) {
    max-width: 1240px;
  }
`;

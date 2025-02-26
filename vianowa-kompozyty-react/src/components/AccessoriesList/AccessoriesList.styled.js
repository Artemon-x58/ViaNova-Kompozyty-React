import styled from "styled-components";

export const AccessoriesListStyled = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  justify-content: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

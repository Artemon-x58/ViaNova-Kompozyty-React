import styled from "styled-components";

export const SaunasImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 350px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

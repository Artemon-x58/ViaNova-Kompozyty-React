import styled from "styled-components";

export const GalleryListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  margin: 40px auto;
  width: 90%;
  max-width: 1200px;
  background-color: #010508;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(255, 140, 0, 0.6);
  }
`;

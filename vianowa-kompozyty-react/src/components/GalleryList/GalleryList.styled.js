import styled from "styled-components";

export const GalleryTitle = styled.h2`
  font-size: clamp(1rem, 0.409rem + 2.95vw, 2.625rem);
  font-weight: bold;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
  margin-bottom: 20px;

  &::after {
    content: "";
    position: absolute;
    width: 50%;
    height: 2px;
    background-color: var(--accent);
    bottom: -8px;
    left: 25%;
  }
`;

export const GallerySubtitle = styled.p`
  font-size: clamp(0.75rem, 0.477rem + 1.36vw, 1.5rem);
  color: var(--accent);
  text-align: center;
  margin-bottom: 40px;
  font-weight: 500;
  letter-spacing: 1px;
  font-style: italic;
  text-transform: capitalize;
`;

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
`;

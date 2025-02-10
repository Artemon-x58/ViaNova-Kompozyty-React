import styled from "styled-components";

export const GalleryItemStyled = styled.li`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 140, 0, 0.4);
  }
`;

export const GalleryItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  border-radius: 12px;
`;

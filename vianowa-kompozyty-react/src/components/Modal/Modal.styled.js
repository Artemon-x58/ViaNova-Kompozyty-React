import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
  padding: 50px;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 90%;
  max-height: 90%;
  overflow: hidden;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

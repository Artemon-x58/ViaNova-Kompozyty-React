import PropTypes from "prop-types";
import { ModalContent, ModalImg, ModalStyled } from "./Modal.styled";

export const Modal = ({ src, alt, onClick }) => {
  return (
    <ModalStyled onClick={onClick}>
      <ModalContent>
        <ModalImg src={src} alt={alt} />
      </ModalContent>
    </ModalStyled>
  );
};

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

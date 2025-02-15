import PropTypes from "prop-types";
import {
  ModalContent,
  ModalImg,
  ModalStyled,
  CloseButton,
} from "./Modal.styled";

export const Modal = ({ src, alt, onClick }) => {
  return (
    <ModalStyled onClick={onClick}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClick} />
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

import PropTypes from "prop-types";
import { GalleryItemImg, GalleryItemStyled } from "./GalleryItem.styled";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

export const GalleryItem = ({ src, alt }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <GalleryItemStyled onClick={openModal}>
        <GalleryItemImg src={src} alt={alt} />
      </GalleryItemStyled>

      {isModalOpen && <Modal src={src} alt={alt} onClick={closeModal} />}
    </>
  );
};

GalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

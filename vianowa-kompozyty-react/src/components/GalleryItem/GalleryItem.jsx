import PropTypes from "prop-types";
import { GalleryItemImg, GalleryItemStyled } from "./GalleryItem.styled";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

export const GalleryItem = ({ src, alt }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("no-scroll");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("no-scroll");
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

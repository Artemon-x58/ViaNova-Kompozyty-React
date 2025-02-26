import PropTypes from "prop-types";
import {
  AccessoriesItemImg,
  AccessoriesItemPrice,
  AccessoriesItemStyled,
  AccessoriesItemText,
  AccessoriesItemTitle,
} from "./AccessoriesItem.styled";

export const AccessoriesItem = ({ name, imgPath, price, about }) => {
  return (
    <AccessoriesItemStyled>
      <AccessoriesItemImg src={imgPath} />
      <AccessoriesItemTitle>{name}</AccessoriesItemTitle>
      <AccessoriesItemPrice>{price} zł</AccessoriesItemPrice>
      <AccessoriesItemText>{about}</AccessoriesItemText>
    </AccessoriesItemStyled>
  );
};

AccessoriesItem.propTypes = {
  name: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  about: PropTypes.string.isRequired,
};

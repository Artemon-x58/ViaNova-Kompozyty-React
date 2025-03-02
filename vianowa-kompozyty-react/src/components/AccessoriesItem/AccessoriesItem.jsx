import PropTypes from "prop-types";
import {
  AccessoriesItemAdd,
  AccessoriesItemImg,
  AccessoriesItemPrice,
  AccessoriesItemRemove,
  AccessoriesItemStyled,
  AccessoriesItemText,
  AccessoriesItemTitle,
} from "./AccessoriesItem.styled";

export const AccessoriesItem = ({ name, imgPath, price, about }) => {
  const test = true;
  return (
    <AccessoriesItemStyled>
      <AccessoriesItemImg src={imgPath} />
      <AccessoriesItemTitle>{name}</AccessoriesItemTitle>
      <AccessoriesItemPrice>{price} zł</AccessoriesItemPrice>
      <AccessoriesItemText>{about}</AccessoriesItemText>
      {test ? (
        <AccessoriesItemAdd type="button">Dodaj do koszyka</AccessoriesItemAdd>
      ) : (
        <AccessoriesItemRemove type="button">
          Usuń z kosza
        </AccessoriesItemRemove>
      )}
    </AccessoriesItemStyled>
  );
};

AccessoriesItem.propTypes = {
  name: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  about: PropTypes.string.isRequired,
};

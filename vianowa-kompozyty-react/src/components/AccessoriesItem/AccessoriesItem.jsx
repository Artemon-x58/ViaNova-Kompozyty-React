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
import { useDispatch, useSelector } from "react-redux";
import {
  addAccessory,
  removeAccessory,
} from "../../redux/accessories/accessoriesSlice";
import { selectAccessories } from "../../redux/accessories/accessoriesSelectors";

export const AccessoriesItem = ({ id, name, imgPath, price, about }) => {
  const dispatch = useDispatch();
  const selectedAccessories = useSelector(selectAccessories);
  const accessory = { id, name, imgPath, price, about };

  const isSelected = selectedAccessories.some((item) => item.id === id);
  const handleClick = () =>
    dispatch(isSelected ? removeAccessory(id) : addAccessory(accessory));

  return (
    <AccessoriesItemStyled>
      <AccessoriesItemImg src={imgPath} />
      <AccessoriesItemTitle>{name}</AccessoriesItemTitle>
      <AccessoriesItemPrice>{price} zł</AccessoriesItemPrice>
      <AccessoriesItemText>{about}</AccessoriesItemText>
      {isSelected ? (
        <AccessoriesItemRemove type="button" onClick={handleClick}>
          Usuń z kosza
        </AccessoriesItemRemove>
      ) : (
        <AccessoriesItemAdd type="button" onClick={handleClick}>
          Dodaj do koszyka
        </AccessoriesItemAdd>
      )}
    </AccessoriesItemStyled>
  );
};

AccessoriesItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  about: PropTypes.string.isRequired,
};

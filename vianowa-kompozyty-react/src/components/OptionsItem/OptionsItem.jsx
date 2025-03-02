import Icons from "../../icons/sprite.svg";
import PropTypes from "prop-types";
import {
  OptionsItemPrice,
  OptionsItemStyled,
  OptionsItemText,
  OptionsItemSeparator,
  OptionsItemPlus,
  OptionsItemMinus,
} from "./OptionsItem.styled";
import { useState } from "react";

export const OptionsItem = ({ name, price }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelect = () => {};

  return (
    <OptionsItemStyled>
      <OptionsItemText>{name}</OptionsItemText>
      <OptionsItemSeparator />
      <OptionsItemPrice>{price} zł</OptionsItemPrice>
      {!isSelected ? (
        <OptionsItemPlus onClick={toggleSelect}>
          <use href={`${Icons}#icon-plus`}></use>
        </OptionsItemPlus>
      ) : (
        <OptionsItemMinus onClick={toggleSelect}>
          <use href={`${Icons}#icon-minus`}></use>
        </OptionsItemMinus>
      )}
    </OptionsItemStyled>
  );
};

OptionsItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

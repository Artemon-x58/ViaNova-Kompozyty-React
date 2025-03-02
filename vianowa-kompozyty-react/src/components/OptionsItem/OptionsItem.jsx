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

import { useDispatch, useSelector } from "react-redux";
import { selectVat } from "../../redux/vats/vatsSelectors";
import { addOption, removeOption } from "../../redux/vats/vatsSlice";

export const OptionsItem = ({ vatId, id, name, price }) => {
  const dispatch = useDispatch();
  const isSelectedVat = useSelector(selectVat).find(
    (item) => item.id === vatId
  );
  const isSelectedOption = isSelectedVat.options.some((item) => item.id === id);

  const toggleSelect = () =>
    dispatch(
      isSelectedOption
        ? removeOption({ vatId: id, option: { price } })
        : addOption({ vatId, option: { id, name, price } })
    );

  return (
    <OptionsItemStyled>
      <OptionsItemText>{name}</OptionsItemText>
      <OptionsItemSeparator />
      <OptionsItemPrice>{price} zł</OptionsItemPrice>
      {!isSelectedOption ? (
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
  vatId: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

import PropTypes from "prop-types";
import Icons from "../../icons/sprite.svg";
import {
  BurgerButtonOpenStyled,
  BurgerButtonOpenSvg,
} from "./BurgerButtonOpen.styled";

export const BurgerButtonOpen = ({ onClick }) => {
  return (
    <BurgerButtonOpenStyled type="button" onClick={onClick}>
      <BurgerButtonOpenSvg>
        <use href={`${Icons}#icon-burger`}></use>
      </BurgerButtonOpenSvg>
    </BurgerButtonOpenStyled>
  );
};

BurgerButtonOpen.propTypes = {
  onClick: PropTypes.func.isRequired,
};

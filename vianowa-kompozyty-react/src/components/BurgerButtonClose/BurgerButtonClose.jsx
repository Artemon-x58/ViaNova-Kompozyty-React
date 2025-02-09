import Icons from "../../icons/sprite.svg";
import {
  BurgerButtonCloseStyled,
  BurgerButtonCloseSvg,
} from "./BurgerButtonClose.styled";

export const BurgerButtonClose = ({ onClick }) => {
  return (
    <BurgerButtonCloseStyled type="button" onClick={onClick}>
      <BurgerButtonCloseSvg>
        <use href={`${Icons}#icon-cross`}></use>
      </BurgerButtonCloseSvg>
    </BurgerButtonCloseStyled>
  );
};

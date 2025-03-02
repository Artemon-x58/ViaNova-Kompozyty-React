import Icon from "../../icons/sprite.svg";
import PropTypes from "prop-types";
import {
  VatsItemimg,
  VatsItemLink,
  VatsItemPrice,
  VatsItemStyled,
  VatsItemSvg,
  VatsItemText,
  VatsItemTitle,
} from "./VatsItem.styled";

export const VatsItem = ({ id, name, imgPath, price, about }) => {
  return (
    <VatsItemStyled>
      <VatsItemimg src={imgPath} alt={name} />
      <VatsItemTitle>{name}</VatsItemTitle>
      <VatsItemPrice>OD {price} zł</VatsItemPrice>
      <VatsItemText>{about}</VatsItemText>
      <VatsItemLink to={`/balie/${id}`}>
        Zobacz więcej{" "}
        <VatsItemSvg>
          <use href={`${Icon}#icon-arrow-right`}></use>
        </VatsItemSvg>
      </VatsItemLink>
    </VatsItemStyled>
  );
};

VatsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  about: PropTypes.string.isRequired,
};

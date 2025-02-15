import PropTypes from "prop-types";
import {
  VatsItemimg,
  VatsItemLink,
  VatsItemPrice,
  VatsItemStyled,
  VatsItemText,
  VatsItemTitle,
} from "./VatsItem.styled";

export const VatsItem = ({ id, name, imgPath, minPrice, about }) => {
  return (
    <VatsItemStyled>
      <VatsItemimg src={imgPath} alt={name} />
      <VatsItemTitle>{name}</VatsItemTitle>
      <VatsItemPrice>OD {minPrice}</VatsItemPrice>
      <VatsItemText>{about}</VatsItemText>
      <VatsItemLink to={`/balie/${id}`}>Zobacz więcej</VatsItemLink>
    </VatsItemStyled>
  );
};

VatsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  minPrice: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

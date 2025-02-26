import PropTypes from "prop-types";
import {
  ConfigurationItemImg,
  ConfigurationItemLink,
  ConfigurationItemPrice,
  ConfigurationItemStyled,
  ConfigurationItemText,
  ConfigurationItemTitle,
} from "./ConfigurationItem.styled";

export const ConfigurationItem = ({ id, name, imgPath, minPrice, about }) => {
  return (
    <ConfigurationItemStyled>
      <ConfigurationItemTitle>{name}</ConfigurationItemTitle>
      <ConfigurationItemImg src={imgPath} alt={name} />
      <ConfigurationItemPrice>Od {minPrice} zł</ConfigurationItemPrice>
      <ConfigurationItemText>{about}</ConfigurationItemText>
      <ConfigurationItemLink to={`/konfiguracja/${id}`}>
        Skonfigurować
      </ConfigurationItemLink>
    </ConfigurationItemStyled>
  );
};

ConfigurationItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  minPrice: PropTypes.number.isRequired,
  about: PropTypes.string.isRequired,
};

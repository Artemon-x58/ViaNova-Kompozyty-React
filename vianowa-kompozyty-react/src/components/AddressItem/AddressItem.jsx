import PropTypes from "prop-types";
import Icon from "../../icons/sprite.svg";
import { AddressLink, AddressSvg, AddressText } from "./AddressItem.styled";

export const AddressItem = ({ href, icon, text, type, format }) => {
  const Component = type === "address" ? AddressText : AddressLink;
  return (
    <Component href={href} format={format}>
      <AddressSvg format={format}>
        <use href={`${Icon}#${icon}`}></use>
      </AddressSvg>
      {text}
    </Component>
  );
};

AddressItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
};

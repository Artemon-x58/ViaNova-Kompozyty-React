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

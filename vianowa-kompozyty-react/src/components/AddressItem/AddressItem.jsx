import Icon from "../../icons/sprite.svg";
import { AddressLink, AddressSvg, AddressText } from "./AddressItem.styled";

export const AddressItem = ({ href, icon, text, type }) => {
  const Component = type === "address" ? AddressText : AddressLink;
  return (
    <Component href={href}>
      <AddressSvg>
        <use href={`${Icon}#${icon}`}></use>
      </AddressSvg>
      {text}
    </Component>
  );
};

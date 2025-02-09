import { addressData } from "../../data/data";
import { AddressItem } from "../AddressItem/AddressItem";
import { AddressStyled } from "./Address.styled";

export const Address = () => {
  return (
    <AddressStyled>
      {addressData.map((item, index) => (
        <AddressItem key={index} {...item} />
      ))}
    </AddressStyled>
  );
};

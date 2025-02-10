import PropTypes from "prop-types";
import { addressData } from "../../data/data";
import { AddressItem } from "../AddressItem/AddressItem";
import { AddressStyled } from "./Address.styled";

export const Address = ({ format }) => {
  return (
    <AddressStyled>
      {addressData.map((item, index) => (
        <AddressItem key={index} format={format} {...item} />
      ))}
    </AddressStyled>
  );
};

Address.propTypes = {
  format: PropTypes.string.isRequired,
};

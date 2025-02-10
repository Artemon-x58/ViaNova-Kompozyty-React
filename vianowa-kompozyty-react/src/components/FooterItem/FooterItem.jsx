import PropTypes from "prop-types";
import { FooterItemLink } from "./FooterItem.styled";

export const FooterItem = ({ name, path }) => {
  return (
    <li>
      <FooterItemLink to={path}>{name}</FooterItemLink>
    </li>
  );
};

FooterItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

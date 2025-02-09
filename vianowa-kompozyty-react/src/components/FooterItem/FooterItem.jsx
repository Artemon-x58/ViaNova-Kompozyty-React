import { FooterItemLink } from "./FooterItem.styled";

export const FooterItem = ({ name, path }) => {
  return (
    <li>
      <FooterItemLink to={path}>{name}</FooterItemLink>
    </li>
  );
};

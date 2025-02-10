import PropTypes from "prop-types";
import { FooterItem } from "../FooterItem/FooterItem";
import { FooterListStyled, FooterListTitle } from "./FooterList.styled";

export const FooterList = ({ arr, title }) => {
  return (
    <div>
      <FooterListTitle>{title}</FooterListTitle>
      <FooterListStyled>
        {arr.map(({ name, path }) => (
          <FooterItem key={name} name={name} path={path} />
        ))}
      </FooterListStyled>
    </div>
  );
};

FooterList.propTypes = {
  title: PropTypes.string.isRequired,
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

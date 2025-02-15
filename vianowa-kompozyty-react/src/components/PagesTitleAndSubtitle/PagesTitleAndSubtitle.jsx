import PropTypes from "prop-types";
import { PagesSubtitle, PagesTitle } from "./PagesTitleAndSubtitle.styled";

export const PagesTitleAndSubtitle = ({ title, subtitle }) => {
  return (
    <>
      <PagesTitle>{title}</PagesTitle>
      <PagesSubtitle>{subtitle}</PagesSubtitle>
    </>
  );
};

PagesTitleAndSubtitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

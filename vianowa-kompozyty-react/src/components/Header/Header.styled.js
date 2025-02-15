import styled from "styled-components";
import image from "../../img/luxurious_outdoor_hot_tub.jpg";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
  position: relative;
  width: 100%;
  padding-top: 20px;
  height: ${({ location }) => (location === "/" ? "500px" : "auto")};
  background-image: ${({ location }) =>
    location === "/" ? `url(${image})` : "none"};

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 -50px 50px rgba(0, 0, 0, 1);
`;

export const HeaderWrapperRow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 30px;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0)
  );
  z-index: 10;
`;

export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LogoHeaderLink = styled(Link)``;

export const LogoHeaderSvg = styled.svg`
  width: 80px;
  height: 60px;
  fill: var(--accent);
  transition: transform 0.3s ease, filter 0.3s ease, color 0.3s ease;

  &:hover,
  &:focus {
    transform: scale(1.2) rotate(15deg);
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));
    fill: #ff5500;
  }

  @media screen and (min-width: 1200px) {
    width: 130px;
  }
`;

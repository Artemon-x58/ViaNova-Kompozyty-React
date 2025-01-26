import styled from "styled-components";
import image from "../../img/luxurious_outdoor_hot_tub.jpg";

export const HeaderStyled = styled.header`
  position: relative;
  width: 100%;
  padding-top: 20px;
  height: 500px;
  background-image: url(${image});
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

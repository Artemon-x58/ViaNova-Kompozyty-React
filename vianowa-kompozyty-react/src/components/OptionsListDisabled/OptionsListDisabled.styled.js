import styled from "styled-components";

export const OptionsListDisabledStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 12px;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
`;

export const OptionsListMessage = styled.p`
  padding: 15px;
  margin-top: 10px;
  max-width: 350px;
  background-color: rgb(223, 46, 2);
  border-radius: 10px;

  font-size: 18px;
  font-weight: bold;
  text-align: center;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

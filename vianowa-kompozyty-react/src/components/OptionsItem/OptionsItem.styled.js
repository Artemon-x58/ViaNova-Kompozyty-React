import styled from "styled-components";

export const OptionsItemStyled = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 18px;
  border-radius: 8px;
  background: linear-gradient(145deg, #222, #2b2b2b);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5),
    -2px -2px 5px rgba(255, 255, 255, 0.1);

  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const OptionsItemText = styled.h3`
  font-size: 18px;
  color: #fff;
`;

export const OptionsItemPrice = styled.p`
  margin-right: 10px;

  font-size: 18px;
  font-weight: bold;
  color: #ff8c00;
`;

export const OptionsItemSeparator = styled.span`
  flex-grow: 1;
  margin: 0 10px;
  border-bottom: 1px dashed var(--accent);
`;

export const OptionsItemPlus = styled.svg`
  width: 16px;
  height: 16px;
  fill: var(--accent);
  cursor: pointer;
`;

export const OptionsItemMinus = styled.svg`
  width: 16px;
  height: 16px;
  fill: red;
  cursor: pointer;
`;

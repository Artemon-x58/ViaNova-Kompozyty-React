import styled from "styled-components";

export const AccessoriesItemStyled = styled.li`
  padding: 20px;

  background-color: rgb(34, 29, 29);
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  color: #fff;
`;

export const AccessoriesItemImg = styled.img`
  border-radius: 12px;
`;

export const AccessoriesItemTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 12px 0;
  text-transform: uppercase;
`;

export const AccessoriesItemText = styled.p`
  margin: 10px 0;
`;

export const AccessoriesItemPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: var(--accent);
  margin-top: 14px;
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  padding-top: 8px;
`;

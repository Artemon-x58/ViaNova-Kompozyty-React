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

export const AccessoriesItemAdd = styled.button`
  background: linear-gradient(45deg, #ff8c00, #ff4500);
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;

  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(255, 140, 0, 0.4);

  &:hover,
  :focus {
    background: linear-gradient(45deg, #ff4500, #ff8c00);
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(255, 69, 0, 0.5);
  }
`;

export const AccessoriesItemRemove = styled(AccessoriesItemAdd)`
  background: #d32f2f;
  box-shadow: 0 4px 8px rgba(211, 47, 47, 0.4);

  &:hover,
  :focus {
    background: #b71c1c;
    box-shadow: 0 6px 12px rgba(183, 28, 28, 0.5);
  }
`;

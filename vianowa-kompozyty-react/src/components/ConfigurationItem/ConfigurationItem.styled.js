import { Link } from "react-router-dom";
import styled from "styled-components";

export const ConfigurationItemStyled = styled.li`
  background-color: rgb(34, 29, 29);

  border-radius: 12px;
  text-align: center;
`;

export const ConfigurationItemTitle = styled.h2`
  font-size: 22px;
  margin: 16px 0;
  font-weight: bold;
  text-transform: uppercase;
`;

export const ConfigurationItemImg = styled.img`
  max-width: 100%;
  height: auto;
  border-bottom: 1px solid #eaeaea;
`;

export const ConfigurationItemPrice = styled.p`
  font-size: 18px;
  color: var(--accent);
  margin: 8px 0;
  font-weight: 500;
`;

export const ConfigurationItemText = styled.p`
  margin: 8px 16px;
  font-size: 1rem;
`;

export const ConfigurationItemLink = styled(Link)`
  display: inline-block;
  margin: 12px 0;
  padding: 12px 20px;
  background-color: var(--accent);
  border-radius: 8px;

  font-weight: 500;
  color: #000;

  transition: color 0.3s, background-color 0.3s;

  &:hover {
    color: unset;
    background-color: rgb(172, 97, 7);
  }
`;

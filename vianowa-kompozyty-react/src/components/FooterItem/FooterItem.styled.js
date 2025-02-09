import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterItemLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;

  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  color: #f0dfcc;
  line-height: 1.7;

  transition: color 0.2s ease-in;

  &:hover,
  &:focus {
    color: var(--accent);
  }
`;

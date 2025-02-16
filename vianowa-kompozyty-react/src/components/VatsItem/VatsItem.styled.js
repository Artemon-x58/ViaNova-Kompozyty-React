import styled from "styled-components";
import { Link } from "react-router-dom";

export const VatsItemStyled = styled.li`
  background-color: rgb(34, 29, 29);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

export const VatsItemimg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid #f1f1f1;
  transition: transform 0.3s ease;
`;

export const VatsItemTitle = styled.h2`
  font-size: clamp(1rem, 0.864rem + 0.68vw, 1.375rem);
  font-weight: 700;

  margin: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const VatsItemPrice = styled.p`
  font-size: clamp(0.875rem, 0.83rem + 0.23vw, 1rem);
  font-weight: 600;
  color: var(--accent);
  margin: 10px 15px;
  letter-spacing: 1px;
  transition: color 0.3s ease;
  &:hover {
    color: #e67e00;
  }
`;

export const VatsItemText = styled.p`
  font-family: "Bebasneue", sans-serif;
  font-size: clamp(0.75rem, 0.659rem + 0.45vw, 1rem);

  margin: 0 15px 15px;
  line-height: 1.5;
  max-height: 100px;
  overflow-y: auto;
`;

export const VatsItemLink = styled(Link)`
  display: flex;
  gap: 10px;
  justify-content: center;

  margin-bottom: 10px;

  font-size: clamp(0.75rem, 0.659rem + 0.45vw, 1rem);
  color: var(--accent);
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: unset;
    transform: scale(1.05);

    & > svg {
      fill: #fff;
    }
  }
`;

export const VatsItemSvg = styled.svg`
  width: clamp(0.875rem, 0.784rem + 0.45vw, 1.125rem);
  height: clamp(0.875rem, 0.784rem + 0.45vw, 1.125rem);
  fill: var(--accent);
  transition: fill 0.3s ease;
`;

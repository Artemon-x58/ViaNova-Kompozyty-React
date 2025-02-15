import styled from "styled-components";

export const PagesTitle = styled.h1`
  font-size: clamp(1rem, 0.409rem + 2.95vw, 2.625rem);
  font-weight: bold;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
  margin-bottom: 20px;

  &::after {
    content: "";
    position: absolute;
    width: 50%;
    height: 2px;
    background-color: var(--accent);
    bottom: -8px;
    left: 25%;
  }
`;

export const PagesSubtitle = styled.p`
  font-size: clamp(0.75rem, 0.477rem + 1.36vw, 1.5rem);
  color: var(--accent);
  text-align: center;
  margin-bottom: 40px;
  font-weight: 500;
  letter-spacing: 1px;
  font-style: italic;
  text-transform: capitalize;
`;

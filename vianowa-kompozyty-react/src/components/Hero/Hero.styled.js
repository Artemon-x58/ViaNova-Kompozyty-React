import styled from "styled-components";

export const HeroText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: clamp(0.875rem, 0.739rem + 0.68vw, 1.25rem);
  line-height: 1.5;
  color: #f0dfcc;
  background-color: #000;
  padding: 15px 25px;
  border: 1px solid var(--accent);
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(255, 140, 0, 0.4);
  text-align: center;
  position: relative;

  &::before {
    content: "“";
    position: absolute;
    top: -25px;
    left: 5px;
    font-size: 80px;
    color: var(--accent);
    opacity: 0.8;
  }

  &::after {
    content: "”";
    position: absolute;
    bottom: -55px;
    right: 5px;
    font-size: 80px;
    color: var(--accent);
    opacity: 0.8;
  }
`;

import styled from "styled-components";

export const AboutProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 20px;

  align-items: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AboutProductsImg = styled.img`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  filter: brightness(1.1) contrast(1.2);
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const AboutProductsTitle = styled.h2`
  margin-bottom: 15px;
  font-family: var(--font-accent);
  color: var(--accent);
  font-weight: 700;
  font-size: 30px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 1.4;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover,
  &:focus {
    color: #ff5500;
    transform: translateY(-5px);
  }

  &::before {
    content: "";
    display: block;
    width: 50%;
    height: 3px;
    background-color: var(--accent);
    margin: 10px auto;
    opacity: 0.5;
    transition: width 0.3s ease;
  }

  &:hover::before,
  &:focus::before {
    width: 100%;
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 46px;
  }
`;

export const AboutProductsSubtitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: clamp(0.875rem, 0.739rem + 0.68vw, 1.25rem);
  color: #f0dfcc;
  line-height: 1.7;

  @media screen and (min-width: 1200px) {
    font-size: 1.2rem;
  }
`;

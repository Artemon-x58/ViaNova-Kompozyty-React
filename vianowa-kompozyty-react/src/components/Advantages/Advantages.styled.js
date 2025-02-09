import styled from "styled-components";

export const AdvantagesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 55px;
`;

export const AdvantagesItem = styled.li`
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #0f0f0f, #1a0202);
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), inset 0 0 15px rgba(24, 7, 1, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.02);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4),
      inset 0 0 30px rgba(255, 140, 0, 0.3);

    & > svg {
      transform: rotate(15deg) scale(1.1);
      fill: #ffa733;
    }

    & > h3 {
      color: #ffa733;
    }

    & > p {
      display: block;
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const AdvantagesSvg = styled.svg`
  margin-bottom: 15px;
  height: 100px;
  width: 100px;
  fill: var(--accent);
  transition: transform 0.3s ease, fill 0.3s ease;
`;

export const AdvantagesTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  color: var(--accent);
  transition: color 0.3s ease;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const AdvantagesSubtitle = styled.p`
  display: none;
  margin-top: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  color: #f0dfcc;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;

  @media screen and (min-width: 1200px) {
    display: block;
    opacity: 1;
  }
`;

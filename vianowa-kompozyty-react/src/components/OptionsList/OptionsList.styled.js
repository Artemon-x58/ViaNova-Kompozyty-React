import styled from "styled-components";

export const OptionsItemTitle = styled.h2`
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 8px;
  background: linear-gradient(145deg, #222, #2b2b2b);
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.5),
    -3px -3px 8px rgba(255, 255, 255, 0.1);
  border: 2px solid var(--accent);

  font-size: 22px;
  font-weight: bold;
  color: var(--accent);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

export const OptionsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  border-radius: 12px;
  background: linear-gradient(145deg, #1e1e1e, #292929);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5),
    -5px -5px 15px rgba(255, 255, 255, 0.1);
  border: 2px solid var(--accent);
  backdrop-filter: blur(10px);
`;

export const OptionsListSum = styled.p`
  padding: 12px;
  margin-top: 15px;
  border-radius: 8px;
  background: linear-gradient(145deg, #222, #2b2b2b);
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.5),
    -3px -3px 8px rgba(255, 255, 255, 0.1);
  border: 2px solid var(--accent);

  font-size: 20px;
  font-weight: bold;
  color: var(--accent);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.2px;
`;

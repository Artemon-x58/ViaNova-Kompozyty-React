import styled from "styled-components";

export const DefiniteVatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  padding: 20px;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 50px;
  }
`;

export const DefiniteVatDescription = styled.p`
  position: relative;
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  background: linear-gradient(135deg, #ff8c00, #f00);
  border-left: 5px solid var(--accent);
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  font-family: "Bebasneue", sans-serif;
  font-size: 18px;
  line-height: 1.7;
  color: #fff;

  max-width: 700px;
  overflow: hidden;
  transition: all 0.5s ease;

  background: radial-gradient(
    circle,
    rgba(146, 78, 14, 0.9) 0%,
    rgba(14, 8, 1, 0.2) 100%
  );
`;

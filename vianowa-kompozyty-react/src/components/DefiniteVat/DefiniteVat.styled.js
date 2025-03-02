import styled from "styled-components";

export const DefiniteVatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  margin-bottom: 50px;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DefiniteVatDescription = styled.p`
  padding: 20px;
  background: radial-gradient(
    circle,
    rgba(146, 78, 14, 0.9) 0%,
    rgba(14, 8, 1, 0.2) 100%
  );
  border-left: 5px solid var(--accent);
  border-radius: 15px;

  font-family: "Bebasneue", sans-serif;
  font-size: 18px;
  line-height: 1.7;

  text-align: center;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const DefiniteVatWrapperBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const DefiniteVatAdd = styled.button`
  background: linear-gradient(45deg, #ff8c00, #f00);
  padding: 15px 30px;
  font-size: 18px;
  font-family: "Bebasneue", sans-serif;
  border-radius: 50px;
  transition: all 0.3s ease-out;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 250px;

  &:hover,
  :focus {
    background: linear-gradient(45deg, #f00, #ff8c00);
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const DefiniteVatRemove = styled(DefiniteVatAdd)`
  background: #f00;

  &:hover,
  :focus {
    background: #ff8c00;
    transform: scale(1.05);
  }
`;

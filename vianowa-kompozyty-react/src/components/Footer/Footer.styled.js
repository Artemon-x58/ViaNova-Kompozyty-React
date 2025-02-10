import styled from "styled-components";

export const FooterStyled = styled.footer`
  padding: 80px 0 20px;
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      var(--accent) 0%,
      rgba(255, 140, 0, 0.3) 50%,
      var(--accent) 100%
    );
    border-radius: 5px;
    margin-bottom: 20px;
  }
`;

export const FooterWrapper = styled.div`
  margin-bottom: 70px;

  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const FooterInfoAndContactsWrapper = styled.div`
  @media screen and (min-width: 1200px) {
    display: flex;
    gap: 25px;
  }
`;

export const FooterInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 25px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 254px;
  }

  @media screen and (min-width: 1200px) {
    gap: 25px;
    margin-bottom: 0;
  }
`;

export const FooterProductsAndInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 25px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 254px;
  }

  @media screen and (min-width: 1200px) {
    gap: 25px;
    margin-bottom: 0;
  }
`;

export const FooterContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 130px;
  }

  @media screen and (min-width: 1200px) {
    gap: 25px;
  }
`;

export const FooterKopyright = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #f0dfcc;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.05em;
  text-align: center;
`;

import styled from "styled-components";

export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const LocationTitle = styled.h2`
  margin-bottom: 15px;
  color: var(--accent);
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 1.4;

  &::before {
    content: "";
    display: block;
    margin-bottom: 10px;
    width: 30%;
    height: 3px;
    background-color: var(--accent);

    opacity: 0.5;
  }
`;

export const LocationGoogleMap = styled.iframe`
  width: 100%;
  height: 400px;
  border: 0;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;

  @media screen and (min-width: 1200px) {
    width: 70%;
    height: 400px;
  }
`;

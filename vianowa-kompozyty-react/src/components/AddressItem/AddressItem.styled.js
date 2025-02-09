import styled from "styled-components";

export const AddressLink = styled.a`
  display: flex;
  align-items: center;

  font-family: "Montserrat", sans-serif;
  font-size: ${({ format }) =>
    format === "location"
      ? "clamp(0.875rem, 0.739rem + 0.68vw, 1.25rem)"
      : "12px"};
  color: #f0dfcc;
  line-height: 1.7;

  transition: color 0.2s ease-in;

  &:hover,
  &:focus {
    color: var(--accent);

    & > svg {
      fill: var(--accent);
    }
  }
`;

export const AddressSvg = styled.svg`
  margin-right: 15px;
  fill: #f0dfcc;
  width: ${({ format }) => (format === "location" ? "30px" : "20px")};
  height: ${({ format }) => (format === "location" ? "30px" : "20px")};

  transition: fill 0.2s ease-in;
`;

export const AddressText = styled.p`
  display: flex;
  align-items: center;

  font-family: "Montserrat", sans-serif;
  font-size: ${({ format }) =>
    format === "location"
      ? "clamp(0.875rem, 0.739rem + 0.68vw, 1.25rem)"
      : "12px"};
  color: #f0dfcc;
  line-height: 1.7;
  cursor: pointer;

  transition: color 0.2s ease-in;

  &:hover,
  &:focus {
    color: var(--accent);

    & > svg {
      fill: var(--accent);
    }
  }
`;

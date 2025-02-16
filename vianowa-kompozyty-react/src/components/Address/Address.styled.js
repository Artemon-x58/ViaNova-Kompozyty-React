import styled from "styled-components";

export const AddressStyled = styled.address`
  display: flex;
  flex-direction: column;
  gap: ${({ format }) => (format === "footer" ? "5px" : "20px")};
`;

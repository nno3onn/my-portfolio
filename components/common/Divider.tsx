import styled from "styled-components";

export const Divider = styled.div`
  border: 1px solid ${({ theme }) => theme.fontColor.grey2};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

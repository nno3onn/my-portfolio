import Link from "next/link";
import styled from "styled-components";

export const LinkWrapper = styled(Link)`
  color: ${({ theme }) => theme.fontColor.blue};

  &:hover {
    text-decoration-line: underline;
  }
`;

import Link from "next/link";
import styled from "styled-components";

export const LinkWrapper = styled(Link)`
  color: ${({ theme }) => theme.fontColor.blue};
  word-break: break-all;

  &:hover {
    text-decoration-line: underline;
  }
`;

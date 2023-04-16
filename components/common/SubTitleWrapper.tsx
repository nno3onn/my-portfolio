import styled from "styled-components";

export const SubTitleWrapper = styled.div<{ isDark: boolean }>`
  color: ${({ theme, isDark }) => theme.fontColor[isDark ? "white" : "black"]};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
  padding-bottom: 20px;
`;

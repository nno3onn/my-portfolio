import styled from "styled-components";

export const Title = styled.div<{ isDark: boolean }>`
  width: fit-content;
  margin-bottom: 52px;

  font-weight: 900;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme, isDark }) => theme.fontColor[isDark ? "white" : "black"]};
  border-bottom: 1px solid ${({ theme, isDark }) => theme.fontColor[`inactive-${isDark ? "dark" : "light"}`]};
`;

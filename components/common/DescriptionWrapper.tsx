import styled from "styled-components";

export const DescriptionWrapper = styled.div<{ isDark: boolean }>`
  line-height: 2;
  color: ${({ theme, isDark }) => theme.fontColor[isDark ? "grey2" : "paragraph"]};
`;

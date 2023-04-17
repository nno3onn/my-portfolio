import styled from "styled-components";

export const DescriptionWrapper = styled.div<{ dark: boolean }>`
  line-height: 2;
  color: ${({ theme, dark }) => theme.fontColor[dark ? "grey2" : "paragraph"]};
`;

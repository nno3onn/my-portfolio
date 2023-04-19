import styled from "styled-components";

export const DescriptionWrapper = styled.div<{ dark: DarkType }>`
  line-height: 2;
  color: ${({ theme, dark }) => theme.fontColor[dark ? "grey2" : "paragraph"]};
`;

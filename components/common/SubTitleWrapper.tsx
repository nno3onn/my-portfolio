import styled from "styled-components";

export const SubTitleWrapper = styled.div<{ dark: DarkType }>`
  color: ${({ theme, dark }) => theme.fontColor[dark ? "white" : "black"]};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
  padding-bottom: 20px;
`;

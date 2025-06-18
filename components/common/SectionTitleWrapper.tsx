import useDark from "@/hooks/useDark";
import { FontColorKey } from "@/styles/theme";
import { ReactNode } from "react";
import styled from "styled-components";

interface TitleProps {
  children: ReactNode;
  color?: string;
}

const SectionTitleWrapper = ({ children, color = "" }: TitleProps) => {
  const dark = useDark();

  return (
    <TitleContainer dark={dark} color={color}>
      {children}
    </TitleContainer>
  );
};

export const TitleContainer = styled.div<{ dark: DarkType; color: string }>`
  width: fit-content;
  margin-bottom: 52px;

  font-weight: 900;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme, dark, color }) => {
    const key = (color || (dark ? "white" : "black")) as FontColorKey;
    return theme.fontColor[key];
  }};
  border-bottom: 1px solid
    ${({ theme, dark, color }) => {
      const key = (color || (dark ? "inactive-dark" : "inactive-light")) as FontColorKey;
      return theme.fontColor[key];
    }};
`;

export default SectionTitleWrapper;

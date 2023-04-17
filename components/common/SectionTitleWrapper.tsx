import useDark from "@/hooks/useDark";
import { useTheme } from "next-themes";
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

export const TitleContainer = styled.div<{ dark: boolean; color: string }>`
  width: fit-content;
  margin-bottom: 52px;

  font-weight: 900;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme, dark, color }) => theme.fontColor[color ? color : dark ? "white" : "black"]};
  border-bottom: 1px solid ${({ theme, dark, color }) => theme.fontColor[color ? color : `inactive-${dark ? "dark" : "light"}`]};
`;

export default SectionTitleWrapper;

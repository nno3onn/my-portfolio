import { useTheme } from "next-themes";
import { ReactNode } from "react";
import styled from "styled-components";

interface TitleProps {
  children: ReactNode;
  color?: string;
}

const SectionTitleWrapper = ({ children, color = "" }: TitleProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <TitleContainer isDark={isDark} color={color}>
      {children}
    </TitleContainer>
  );
};

export const TitleContainer = styled.div<{ isDark: boolean; color: string }>`
  width: fit-content;
  margin-bottom: 52px;

  font-weight: 900;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme, isDark, color }) => theme.fontColor[color ? color : isDark ? "white" : "black"]};
  border-bottom: 1px solid ${({ theme, isDark, color }) => theme.fontColor[color ? color : `inactive-${isDark ? "dark" : "light"}`]};
`;

export default SectionTitleWrapper;

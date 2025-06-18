import { ReactNode } from "react";
import styled from "styled-components";

interface ContentsWrapperProps {
  title?: ReactNode;
  children: ReactNode;
  width?: number | null;
  height?: number | null;
  padding?: number;
  url?: string;
  isTransform?: boolean;
}

const ContentsWrapper = ({ title = "", children, width = null, height = null, padding = 24, url = "", isTransform = true }: ContentsWrapperProps) => {
  return (
    <ContentsContainer
      width={width}
      height={height}
      padding={padding}
      isTransform={isTransform}
      onClick={() => (url ? (document.location.href = url) : null)}
      hasUrl={!!url}
    >
      {title}
      {children}
    </ContentsContainer>
  );
};

interface ContentsContainerProps {
  hasUrl: boolean;
  width: number | null;
  height: number | null;
  padding: number;
  isTransform: boolean;
}

const ContentsContainer = styled.div<ContentsContainerProps>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "100%")};
  padding: ${({ padding }) => padding}px;
  margin-bottom: 32px;
  border-radius: 24px;

  box-shadow: ${({ theme }) => theme.backgroundColor["box-shadow"]};
  background-color: ${({ theme }) => theme.backgroundColor.white};

  transition: all 0.2s ease-in-out;

  cursor: ${({ hasUrl }) => (hasUrl ? "pointer" : "auto")};

  &:hover {
    transform: ${({ isTransform }) => (isTransform ? "translateY(12px)" : "none")};
  }
`;

export default ContentsWrapper;

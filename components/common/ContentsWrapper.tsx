import { ReactNode } from "react";
import styled from "styled-components";

interface ContentsWrapperProps {
  title?: ReactNode;
  children: ReactNode;
  width?: number | null;
  height?: number | null;
  url?: string;
}

const ContentsWrapper = ({ title, children, width = null, height = null, url = "" }: ContentsWrapperProps) => {
  return (
    <ContentsContainer width={width} height={height} onClick={() => (url ? (document.location.href = url) : null)} hasUrl={!!url}>
      {title}
      {children}
    </ContentsContainer>
  );
};

const ContentsContainer = styled.div<{ hasUrl: boolean; width: number | null; height: number | null }>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "100%")};
  padding: 24px;
  margin-bottom: 32px;
  border-radius: 24px;

  box-shadow: ${({ theme }) => theme.backgroundColor["box-shadow"]};
  background-color: ${({ theme }) => theme.backgroundColor.white};

  transition: all 0.2s ease-in-out;

  cursor: ${({ hasUrl }) => (hasUrl ? "pointer" : "auto")};

  &:hover {
    transform: translateY(12px);
  }
`;

export default ContentsWrapper;

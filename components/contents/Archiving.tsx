import styled from "styled-components";
import ContentsWrapper from "../common/ContentsWrapper";
import { ReactNode, RefObject } from "react";
import { SectionWrapper } from "../common/SectionWrapper";
import SectionTitleWrapper from "../common/SectionTitleWrapper";
import ArchivingTemplate from "./Archiving/ArchivingTemplate";
import Tistory from "./Archiving/Tistory";
import Github from "./Archiving/Github";
import { flexCenter } from "@/styles/flexCenter";

interface ContentsTitleWrapperProps {
  logo: ReactNode;
  title: string;
}

const ContentsTitleWrapper = ({ logo, title }: ContentsTitleWrapperProps) => (
  <TitleContainer>
    {logo}
    {title}
  </TitleContainer>
);

interface ArchivingProps {
  element: RefObject<HTMLDivElement>;
}

const Archiving = ({ element }: ArchivingProps) => {
  return (
    <ArchivingContainer ref={element}>
      <SectionWrapper>
        <SectionTitleWrapper color="white">ARCHIVING</SectionTitleWrapper>

        <ContentsContainer>
          <Github />
          <Tistory />
        </ContentsContainer>
      </SectionWrapper>
    </ArchivingContainer>
  );
};

const ArchivingContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor.black};
`;

const ContentsContainer = styled.div`
  ${flexCenter}
  flex-flow: wrap;
  gap: 40px;

  li {
    margin-bottom: 12px;
  }
`;

const LinkWrapper = styled.div`
  margin-bottom: 24px;
  color: ${({ theme }) => theme.fontColor.blue};
`;

const Description = styled.div`
  font-weight: bold;
  margin-bottom: 24px;
`;

const TitleContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;

  display: flex;
  align-items: center;
  gap: 16px;

  margin-bottom: 24px;
`;

export default Archiving;

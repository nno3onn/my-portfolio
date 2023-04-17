import ContentsWrapper from "@/components/common/ContentsWrapper";
import { DateWrapper } from "@/components/common/DateWrapper";
import { DescriptionWrapper } from "@/components/common/DescriptionWrapper";
import { SubTitleWrapper } from "@/components/common/SubTitleWrapper";
import { ReactElement } from "react";
import styled from "styled-components";

interface ProjectsTemplateProps {
  dark: boolean;
  title: string;
  date: string;
  children: ReactElement;
}

const ProjectsTemplate = ({ dark, title, date, children }: ProjectsTemplateProps) => {
  return (
    <ContentsWrapper padding={48} isTransform={false}>
      <SubTitleWrapper dark={dark}>{title}</SubTitleWrapper>
      <DateWrapper>{date}</DateWrapper>
      <DescriptionWrapper dark={dark}>{children}</DescriptionWrapper>
    </ContentsWrapper>
  );
};

export default ProjectsTemplate;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

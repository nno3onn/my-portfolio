import ContentsWrapper from "@/components/common/ContentsWrapper";
import { DateWrapper } from "@/components/common/DateWrapper";
import { DescriptionWrapper } from "@/components/common/DescriptionWrapper";
import { SubTitleWrapper } from "@/components/common/SubTitleWrapper";
import { ReactNode } from "react";
import styled from "styled-components";

interface ProjectsTemplateProps {
  title: string;
  date: string;
  children: ReactNode;
}

const ProjectsTemplate = ({ title, date, children }: ProjectsTemplateProps) => {
  return (
    <ContentsWrapper padding={48} isTransform={false}>
      <SubTitleWrapper dark={false}>{title}</SubTitleWrapper>
      <DateWrapper>{date}</DateWrapper>
      <DescriptionWrapper dark={false}>{children}</DescriptionWrapper>
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

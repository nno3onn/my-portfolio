import ProjectsTemplate, { ProjectsContainer, TableWrapper } from "./ProjectsTemplate";
import { Divider } from "@/components/common/Divider";
import Table from "./Table";
import { HighLightText } from "@/components/common/HighlightText";
import { LinkWrapper } from "@/components/common/LinkWrapper";

const Portfolio = () => {
  return (
    <ProjectsTemplate title="개인 포트폴리오 사이트" date="2023.04 (1인 개인 프로젝트)">
      <ProjectsContainer>
        <div>
          <p>개인 포트폴리오로 개발한 웹입니다.</p>
          <p>
            Next.js의 <HighLightText>SSR</HighLightText> 기능을 직접 익히고 장점을 체감하고자 리액트 대신 Next.js를 선택하였습니다.
          </p>
        </div>

        <Divider />

        <TableWrapper>
          <Table tableKey="주요 기능" tableValue="자기 소개, 기술 스택, 개발 정리 주소들, 개발 프로젝트들, 교육 이력, 업무 경력" />
          <Table
            tableKey="Github"
            tableValue={<LinkWrapper href="https://github.com/nno3onn/my-portfolio">https://github.com/nno3onn/my-portfolio</LinkWrapper>}
          />
          <Table
            tableKey="URL"
            tableValue={<LinkWrapper href="https://nno3onn-portfolio.vercel.app">https://nno3onn-portfolio.vercel.app</LinkWrapper>}
          />
          <Table tableKey="Frontend" tableValue="Next.js, TypeScript, Styled-Components" />
          <Table tableKey="Deployment" tableValue="Vercel" />
        </TableWrapper>
      </ProjectsContainer>
    </ProjectsTemplate>
  );
};

export default Portfolio;

import { HighLightText } from "@/components/common/HighlightText";
import ProjectsTemplate, { ProjectsContainer, TableWrapper } from "./ProjectsTemplate";
import { Divider } from "@/components/common/Divider";
import Table from "./Table";
import { LinkWrapper } from "@/components/common/LinkWrapper";

interface ApplogProps {
  isDark: boolean;
}

const Applog = ({ isDark }: ApplogProps) => {
  return (
    <ProjectsTemplate isDark={isDark} title="Applog (블로그)" date="2022.12 (1인 개인 프로젝트)">
      <ProjectsContainer>
        <p>
          <HighLightText>스마일게이트 윈터데브캠프 2기</HighLightText>에 참가하여 개발한 1인 개인 프로젝트 블로그입니다.
        </p>

        <ul>
          <li>
            ERDCloud에서 다른 사람들의 DB 설계들을 참고하며 혼자서 <HighLightText>DB 설계</HighLightText>를 해봄으로써, 테이블 간 관계를 설정하며 DB를
            정리하는 방법에 대해 알게 됨
          </li>
          <li>
            <HighLightText>AWS의 S3와 RDS</HighLightText>를 처음으로 사용해보면서 <HighLightText>SaaS</HighLightText>와
            <HighLightText> PaaS</HighLightText>의 개념을 알게 되었고, RDS로 MySQL을 연결하여 데이터베이스를 관리하고 S3를 활용하여 게시글 썸네일
            파일을 관리해보면서 IaaS인 AWS를 사용하면 프로젝트를 더 쉽게 배포할 수 있음을 알게 됨
          </li>
          <li>velog의 화면 구성을 하나씩 직접 뜯어보고 구현해보면서, UI적인 웹 프론트엔드 개발 팁들을 알게 됨</li>
        </ul>
        <Divider />

        <TableWrapper>
          <Table tableKey="주요 기능" tableValue="자기 소개, 기술 스택, 개발 정리 주소들, 개발 프로젝트들, 교육 이력, 업무 경력" />
          <Table
            tableKey="Github"
            tableValue={
              <LinkWrapper href="https://github.com/nno3onn/smilegate-winterDevCamp-blog">
                https://github.com/nno3onn/smilegate-winterDevCamp-blog
              </LinkWrapper>
            }
          />
          <Table
            tableKey="URL"
            tableValue={<LinkWrapper href="https://nno3onn-portfolio.vercel.app">https://nno3onn-portfolio.vercel.app</LinkWrapper>}
          />
          <Table tableKey="Frontend" tableValue="Next.js, TypeScript, Redux, Styled-Components, React-Quill" />
          <Table tableKey="Database" tableValue="AWS S3, MySQL, AWS RDS" />
          <Table tableKey="Deployment" tableValue="Vercel" />
        </TableWrapper>
      </ProjectsContainer>
    </ProjectsTemplate>
  );
};

export default Applog;

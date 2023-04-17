import { Divider } from "@/components/common/Divider";
import ProjectsTemplate, { ProjectsContainer, TableWrapper } from "./ProjectsTemplate";
import Table from "./Table";
import { HighLightText } from "@/components/common/HighlightText";
import { LinkWrapper } from "@/components/common/LinkWrapper";

interface CodeFolioProps {
  dark: boolean;
}

const CodeFolio = ({ dark }: CodeFolioProps) => {
  return (
    <ProjectsTemplate dark={dark} title="CodeFolio" date="2023.02 - 2023.03 (5인 팀 프로젝트)">
      <ProjectsContainer>
        <div>
          <p>
            스파르타 코딩클럽의 내일배움캠프 리액트 과정의 파이널 프로젝트로 진행한 5인 팀 프로젝트로, 부트캠프 수강생들이 작업한 프로젝트를
            체계적으로 정리하는 포트폴리오 공유 서비스입니다.
          </p>

          <br />

          <ul>
            <li>
              깃허브의 Issues, PR, Labels, Milestones, Discussions, Projects 기능을 처음으로 사용해보면서
              <HighLightText> 깃허브를 활용한 팀 협업 방법</HighLightText>을 배움
            </li>
            <li>
              PR을 통한 팀원 간의 <HighLightText>코드리뷰</HighLightText>를 통해 나의 코드를 개선하고, 효율적으로 코드를 작성하는 방법을 알게 됨
            </li>
            <li>
              하나의 기술 스택을 선택할 때마다 팀원들과 함께 다양한 기술 스택들을 직접 비교하며 토론을 하면서, 다양한 방면에서 꼼꼼히 고려하여 기술
              스택을 선정하는 것이 중요하다는 것을 알게 됨
            </li>
          </ul>
        </div>

        <Divider />

        <TableWrapper>
          <Table tableKey="팀 구성" tableValue="프론트엔드 5명" />
          <Table
            tableKey="주요 기능"
            tableValue="로그인/회원가입/로그아웃, 사용자 프로필 수정, 태그에 따른 게시글 보기, 게시글 추천순/최신순/댓글순으로 보기, 게시글 검색 기능, 게시글 작성/수정/삭제, 게시글 추천 배지 주기, 게시글에 댓글 작성/수정/삭제, 게시글 좋아요 기능, 게시글 북마크 기능, 알림 기능(게시글 좋아요, 댓글 등), 사용자 프로필에 칭찬배지 주기, 사용자 프로필에 댓글 달기"
          />
          <Table
            tableKey="Github"
            tableValue={
              <LinkWrapper href="https://github.com/react-challengers/Codefolio">https://github.com/react-challengers/Codefolio</LinkWrapper>
            }
          />
          <Table tableKey="URL" tableValue={<LinkWrapper href="https://code-folio.vercel.app">https://code-folio.vercel.app</LinkWrapper>} />
          <Table tableKey="Frontend" tableValue="Next.js, Typescript, Recoil, React-Query, Styled-Components, Lodash" />
          <Table tableKey="BaaS" tableValue="Supabase" />
          <Table tableKey="Deployment" tableValue="Vercel" />
        </TableWrapper>
      </ProjectsContainer>
    </ProjectsTemplate>
  );
};

export default CodeFolio;

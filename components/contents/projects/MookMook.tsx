import { HighLightText } from "@/components/common/HighlightText";
import ProjectsTemplate, { ProjectsContainer, TableWrapper } from "./ProjectsTemplate";
import { Divider } from "@/components/common/Divider";
import Table from "./Table";
import { LinkWrapper } from "@/components/common/LinkWrapper";

const MookMook = () => {
  return (
    <ProjectsTemplate title="Mook-Mook" date="2022.07 - 2022.11 (3인 팀 프로젝트)">
      <ProjectsContainer>
        <div>
          <p>교내 프론트엔드 스터디에서 진행한 팀 프로젝트입니다. </p>
          <p>
            Mook-Mook에서 Mook은 Movie와 Book을 합친 단어로, 영화와 책을 감상하는 것을 취미로 하는 팀원들이 모여 개발하게 된 영화와 책을 리뷰하는 웹
            사이트입니다.
          </p>
          <p>
            “사용자의 감상을 하나의 색감에 담아내어 기억과 느낌을 오래 남도록 하는 것”을 목표로 두고, 리뷰에 등록한 사진에서 하나의 색을 추출하여
            사용자가 자신의 리뷰를 다시 읽었을 때 감상한 느낌 그대로를 생생하게 느낄 수 있도록 하였습니다. 또한 메인 페이지에 리뷰 카드 리스트를
            추출한 색깔 별로 정렬하여 감성적으로 꾸몄습니다.
          </p>
        </div>

        <ul>
          <li>
            처음으로 바닐라 자바스크립트가 아닌 프레임워크를 활용하여 웹을 개발해보면서 <HighLightText>SPA</HighLightText>의 장점을 체득할 수 있었음
          </li>
          <li>
            Github로 팀원들과 처음 협업을 해보며 <HighLightText>Github 기본 사용법</HighLightText>을 배우고, 간단한
            <HighLightText> Git 명령어</HighLightText>들을 알게 됨
          </li>
          <li>
            <HighLightText>Firebase</HighLightText> 서비스를 처음 사용해보면서, <HighLightText>BaaS</HighLightText>를 활용하면 백엔드를 직접 구축할
            필요 없이 프로젝트를 진행할 수 있다는 것을 알게 되었고, <HighLightText>NoSQL</HighLightText>을 실제로 사용해보고 팀원들과 DB를
            구축해보면서 <HighLightText>DB 설계의 기초</HighLightText>를 알게됨
          </li>
          <li>
            Slack Webhooks API를 활용하여 실시간으로 사용자의 메시지를 슬랙으로 받아보면서, <HighLightText>Webhook</HighLightText>의 특징을 알게됨
          </li>
        </ul>

        <Divider />

        <TableWrapper>
          <Table tableKey="팀 구성" tableValue="프론트엔드 3명" />
          <Table
            tableKey="주요 기능"
            tableValue="소셜 로그인, 로그아웃, 게시글 CRUD, 게시글에 첨부된 사진에서 추출된 색별로 리스트를 정렬하여 보여주기, 슬랙 웹훅 API를 활용하여 사용자 피드백 받기"
          />
          <Table
            tableKey="Github"
            tableValue={<LinkWrapper href="https://github.com/andWHISKEY/Mook-Mook">https://github.com/andWHISKEY/Mook-Mook</LinkWrapper>}
          />
          <Table tableKey="Frontend" tableValue="React.js, SCSS" />
          <Table tableKey="Backend/Database" tableValue="Firebase Authentication, Firebase Firestore, Firebase Storage" />
          <Table tableKey="API" tableValue="Naver Search API(Movie, Book)" />
          <Table tableKey="Deployment" tableValue="Vercel" />
        </TableWrapper>
      </ProjectsContainer>
    </ProjectsTemplate>
  );
};

export default MookMook;

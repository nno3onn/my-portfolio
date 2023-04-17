import { HighLightText } from "@/components/common/HighlightText";
import ProjectsTemplate, { ProjectsContainer, TableWrapper } from "./ProjectsTemplate";
import { Divider } from "@/components/common/Divider";
import Table from "./Table";
import { LinkWrapper } from "@/components/common/LinkWrapper";
import { BoldText } from "@/components/common/BoldText";

interface IcocoProps {
  dark: boolean;
}

const Icoco = ({ dark }: IcocoProps) => {
  return (
    <ProjectsTemplate dark={dark} title="icoco (아이코코)" date="2022.10 - 2023.04">
      <ProjectsContainer>
        <p>
          비바세컨드에 근무할 당시 외주로 진행했던 프로젝트로, 산모들이 원하는 산후도우미를 찾아 매칭시켜주는 서비스입니다. 저는 웹 풀스택 개발자로서
          관리자 웹과 ERP 웹을 개발하고, 필요한 API들을 생성하는 업무를 담당하였습니다.
        </p>

        <ul>
          <li>
            클라이언트의 요청 사항으로 인해 업무의 사소한 부분이 수정되어도 앱과 웹, 혹은 DB가 크게 달라질 수 있으므로
            <HighLightText> 개발자간의 소통이 중요</HighLightText>하다는 것을 알게 됨
          </li>
          <li>
            초기에 서비스의 전체 흐름을 통찰력있게 잘 살펴보고 여러 요소들을 고려하여 <HighLightText>탄탄하게 DB를 설계</HighLightText>하는 것이
            중요하다는 사실을 크게 깨달음
          </li>
          <li>
            앱과 웹에서 필요한 API를 생성하는 과정에서 <HighLightText>백엔드</HighLightText> 영역을 이해하게 되었고, 백엔드 개발자와 원활하게 소통할
            수 있는 기반을 다지게 됨
          </li>
        </ul>

        <Divider />

        <TableWrapper>
          <Table tableKey="팀 구성" tableValue="웹 풀스택 1명, 앱 1명" />
          <Table
            tableKey="주요 기능"
            tableValue={
              <>
                <BoldText>관리자 웹</BoldText>
                <ul>
                  <li>
                    관리자 계정 로그인/로그아웃, 산후조리 도우미 회사 계정 관리(CRUD), 회사명 검색 기능, 육아팁/공지사항/이벤트 게시글 CRUD, 육아팁
                    태그에 따른 육아팁 게시글 리스트 보기, 이벤트 상태에 따른 이벤트 게시글 리스트 보기
                  </li>
                </ul>
                <br />
                <BoldText>ERP 웹</BoldText>
                <ul>
                  <li>
                    회사 계정 로그인/로그아웃, 첫 접속 시 회사 정보 입력하기, 기간 내 여러 통계들을 차트와 수치로 확인, 예약
                    관리(보기/추가/수정/삭제), 예약 상태에 따른 예약 리스트 보기, 관리사 관리(보기/추가/수정/삭제), 관리사명/파견 상태/경력/연령으로
                    관리사 검색 기능, 파견 예정 관리사 리스트 캐러셀로 보기
                  </li>
                </ul>
              </>
            }
          />
          <Table
            tableKey="Github"
            tableValue={<LinkWrapper href="https://github.com/nno3onn/icoco2022-project">https://github.com/nno3onn/icoco2022-project</LinkWrapper>}
          />
          <Table
            tableKey="URL"
            tableValue={<LinkWrapper href="https://nno3onn-portfolio.vercel.app">https://nno3onn-portfolio.vercel.app</LinkWrapper>}
          />
          <Table tableKey="Frontend" tableValue="Next.js, SCSS" />
          <Table
            tableKey="Backend/Database"
            tableValue="Firebase Authentication, Firebase Firestore, Firebase Functions, Firebase Storage, Elastic Search, Node.js"
          />
          <Table tableKey="Deployment" tableValue="Vercel" />
        </TableWrapper>
      </ProjectsContainer>
    </ProjectsTemplate>
  );
};

export default Icoco;

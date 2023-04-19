import { HighLightText } from "@/components/common/HighlightText";
import ProjectsTemplate, { ProjectsContainer, TableWrapper } from "./ProjectsTemplate";
import { Divider } from "@/components/common/Divider";
import Table from "./Table";
import { LinkWrapper } from "@/components/common/LinkWrapper";

const Discord = () => {
  return (
    <ProjectsTemplate title="디스코드 클론코딩" date="[캠프 기간] 2023.01 - 2023.02 (5인 프로젝트) | [추가 개발] 2023.03 - 진행 중 (3인 프로젝트)">
      <ProjectsContainer>
        <div>
          <p>
            <HighLightText>스마일게이트 윈터데브캠프 2기</HighLightText>에 참가하여 개발한 팀 프로젝트입니다.
          </p>
          <p>
            디스코드의 채팅 서버, 시그널링 서버, 알림 서버, 인증 서버, 상태관리 서버 등 기능에 있어 복합적으로 이뤄져 있고, 채팅, 음성, 화상대화 등 각
            기능을 구현하는데 있어서 팀원들이 기존에 접해보지 못했던 아키텍처와 기술 스택들이기 때문에 성장을 원하는 팀원들의 니즈와 도전 목표로
            적합하다고 판단하여 디스코드 클론코딩을 주제로 선정하게 되었습니다.
          </p>
          <ul>
            <li>
              매일 깃허브 위키에 4F(Facts, Feeling, Finding, Future)를 담은 <HighLightText>TIL</HighLightText>을 꾸준히 작성하여 공부하고 배운 점들을
              기록하며 개발 기억을 남기면서 기록의 중요성을 깨닫게 됨
            </li>
            <li>
              <HighLightText>아토믹 디자인 패턴</HighLightText>과 <HighLightText>스토리북</HighLightText>을 처음으로 프로젝트에 적용하여 컴포넌트를
              설계해보면서, 디자인 패턴을 활용하면 컴포넌트 관리에 용이하다는 것을 체감하게 됨
            </li>
            <li>
              동적인 자바스크립트의 단점을 보완하기 위해 전체 코드에 <HighLightText>타입스크립트</HighLightText>를 적용하여 빌드 시 발생하는 오류를
              줄임으로써 타입스크립트의 위대함을 느끼게 됨
            </li>
            <li>
              Redux 대신 <HighLightText>Zustand</HighLightText>를 사용해보면서 보일러 플레이트 코드가 줄어들고 devtools, persist와 같은 자체
              미들웨어를 사용할 수 있다는 점에서 장점을 느낄 수 있었고, 프로젝트의 특성을 잘 파악하여
              <HighLightText> 알맞은 라이브러리 선정</HighLightText>하는 것이 중요함 깨달음
            </li>
          </ul>
        </div>

        <Divider />

        <TableWrapper>
          <Table tableKey="팀 구성" tableValue="[캠프 기간] 프론트엔드 2명, 백엔드 3명 | [추가 개발] 프론트엔드 2명, 백엔드 1명" />
          <Table
            tableKey="주요 기능"
            tableValue="회원가입, 로그인, 로그아웃, 유저 관리(프로필 수정/탈퇴), 친구 관리(추가/수락/거절/삭제), 필터에 따른 친구 리스트 보기(온라인, 모두, 대기 중), 개인 메시지 주고 받기, 커뮤니티 관리(생성/수정/삭제), 현재 방에 접속 중인 친구 리스트 띄우기, 단체 채팅방 메시지 주고 받기, 친구 카테고리 초대장 생성 및 전달, 초대장 받은 친구 카테고리 추가 기능"
          />
          <Table
            tableKey="Github"
            tableValue={
              <>
                <p>
                  [캠프 기간]
                  <LinkWrapper href="https://github.com/sgdevcamp2022/ottogi"> https://github.com/sgdevcamp2022/ottogi</LinkWrapper>
                </p>
                <p>
                  [추가 개발] <LinkWrapper href="https://github.com/ODUGI"> https://github.com/ODUGI</LinkWrapper>
                </p>
              </>
            }
          />
          <Table tableKey="Frontend" tableValue="React.js, Typescript, Zustand, React-Query, Styled-Components, Storybook" />
          <Table tableKey="Deployment" tableValue="Vercel" />
        </TableWrapper>
      </ProjectsContainer>
    </ProjectsTemplate>
  );
};

export default Discord;

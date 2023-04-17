import { Divider } from "@/components/common/Divider";
import ProjectsTemplate, { ProjectsContainer, TableWrapper } from "./ProjectsTemplate";
import { HighLightText } from "@/components/common/HighlightText";
import { LinkWrapper } from "@/components/common/LinkWrapper";
import Table from "./Table";

interface CoorderProps {
  isDark: boolean;
}

const Coorder = ({ isDark }: CoorderProps) => {
  return (
    <ProjectsTemplate isDark={isDark} title="CO:ORDER (코오더)" date="2022.06 - 2022.09 (5인 프로젝트)">
      <ProjectsContainer>
        <div>
          <p>
            1인 가구의 배달팁 부담 완화를 위한 효율적인 묶음 배달 서비스로, 대구x청년 소셜 리빙랩 공모전에 참가한 프로젝트입니다. 총 3단계 중
            2단계까지 진출하였고, 저는 코오더팀의 웹 프론트엔드 개발자로 참여하였습니다.
          </p>
        </div>

        <ul>
          <li>
            클라이언트 상태 관리 라이브러리를 익히고 장점을 체득하기 위해 주문 시간, 주문 장소, 장바구니와 같은 클라이언트 상태를 관리하는데
            <HighLightText> Redux</HighLightText>를 사용해보았고, 클라이언트 상태 관리 라이브러리를 활용하면 클라이언트에서 props drilling 문제 없이
            상태를 더 쉽고 간편하게 관리할 수 있음을 깨닫게 됨
          </li>
          <li>
            휴대폰 인증 기능 구현에 <HighLightText>JWT</HighLightText>를 활용하여 인증에 보안을 높이면서 JWT의 사용법과 특징을 알게 됨
          </li>
        </ul>

        <Divider />

        <TableWrapper>
          <Table tableKey="팀 구성" tableValue="기획 1명, 디자인 1명, 마케팅 1명, 웹 프론트엔드 1명, 백엔드 1명" />
          <Table
            tableKey="주요 기능"
            tableValue="원하는 주문 장소/시간 선택, 가게의 음식과 옵션 선택 후 장바구니에 추가하기, 장바구니에 추가한 음식 삭제, 휴대폰 문자로 본인 인증하기, 카카오페이/네이버페이/카드 정보 입력으로 음식 주문하기"
          />
          <Table
            tableKey="Github"
            tableValue={<LinkWrapper href="https://github.com/nno3onn/coorder-project">https://github.com/nno3onn/coorder-project</LinkWrapper>}
          />
          <Table
            tableKey="URL"
            tableValue={<LinkWrapper href="https://nno3onn-portfolio.vercel.app">https://nno3onn-portfolio.vercel.app</LinkWrapper>}
          />
          <Table tableKey="Frontend" tableValue="Next.js, Styled-Components" />
          <Table tableKey="Deployment" tableValue="Vercel" />
        </TableWrapper>
      </ProjectsContainer>
    </ProjectsTemplate>
  );
};

export default Coorder;

import ProjectsTemplate, { ProjectsContainer, TableWrapper } from "./ProjectsTemplate";
import { Divider } from "@/components/common/Divider";
import Table from "./Table";
import { HighLightText } from "@/components/common/HighlightText";
import { LinkWrapper } from "@/components/common/LinkWrapper";

const Delog = () => {
  return (
    <ProjectsTemplate title="델로그(Delog)" date="2025.05.29-2025.07.20">
      <ProjectsContainer>
        <div>
          <p>
            2025 가치 크루 1기 ‘냠분석단’팀의 프론트엔드 개발자로 참여 중인 프로젝트로, 배달 음식 기록만으로 지출과 건강을 한눈에 파악할 수 있는
            스마트 미니 가계부 서비스입니다.
          </p>
        </div>

        {/* <div>
          <ul>
            <li>짧은 시간 안에 아이디어를 빠르게 구체화하고 구현하는 해커톤 특유의 몰입감을 통해 집중력과 실행력을 기르는 방법을 배움</li>
            <li>
              <HighLightText>TailwindCSS</HighLightText>를 활용해 빠르고 유연하게 UI를 구성하는 방법을 알게됨
            </li>
            <li>팀원들과의 원활한 커뮤니케이션이 개발 속도와 완성도에 큰 영향을 준다는 것을 알게됨</li>
            <li>
              기술적인 완성도뿐 아니라 <HighLightText>'왜 이걸 만들었는가'</HighLightText>를 고민하는 태도가 프로젝트의 방향성을 결정한다는 점을 배움
            </li>
          </ul>
        </div> */}

        <Divider />

        <TableWrapper>
          <Table tableKey="팀 구성" tableValue="프론트엔드 2명, 백엔드 3명, 디자이너 1명" />
          <Table tableKey="주요 기능" tableValue="위치 기반 오디오 재생, 간편한 이야기 기록, 북마크 기능, 직관적인 지도 인터페이스" />
          <Table
            tableKey="Github"
            tableValue={
              <LinkWrapper href="https://github.com/MAKE-VALUE-GACHI/5_delog-front">https://github.com/MAKE-VALUE-GACHI/5_delog-front</LinkWrapper>
            }
          />
          <Table
            tableKey="서비스 정리 노션"
            tableValue={
              <LinkWrapper href="https://www.notion.so/210feb0abbf88078b3d3d055c6a1eeaa?source=copy_link">
                https://www.notion.so/210feb0abbf88078b3d3d055c6a1eeaa?source=copy_link
              </LinkWrapper>
            }
          />
          <Table tableKey="Frontend" tableValue="Next.js, TypeScript, Tailwind, NextAuth.js, React-hook-form, Zod, Zustand, Jest, Cypress" />
          {/* <Table tableKey="Deployment" tableValue="Vercel" /> */}
        </TableWrapper>
      </ProjectsContainer>
    </ProjectsTemplate>
  );
};

export default Delog;

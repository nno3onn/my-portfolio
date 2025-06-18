import ProjectsTemplate, { ProjectsContainer, TableWrapper } from "./ProjectsTemplate";
import { Divider } from "@/components/common/Divider";
import Table from "./Table";
import { HighLightText } from "@/components/common/HighlightText";
import { LinkWrapper } from "@/components/common/LinkWrapper";

const DND = () => {
  return (
    <ProjectsTemplate title="동네왔수다" date="2025.05.23-2025.05.24">
      <ProjectsContainer>
        <div>
          <p>2025 DND 해커톤 2기 ‘야근수당’팀의 프론트엔드 개발자로 참여하여, 1등 수상한 프로젝트입니다.</p>
          <p>
            전래동화를 현대적으로 재해석한 산책형 오디오 플랫폼입니다. 지역 주민이 직접 녹음한 이야기를 특정 장소에서 들으며, 구술 전승 방식을
            디지털로 재현했습니다. 동네를 걸으며 장소의 기억을 듣고, 자신의 경험을 기록해 세대 간 소통과 지역 정체성 회복에 기여합니다.
          </p>
        </div>

        <div>
          <ul>
            <li>짧은 시간 안에 아이디어를 빠르게 구체화하고 구현하는 해커톤 특유의 몰입감을 통해 집중력과 실행력을 기르는 방법을 배움</li>
            <li>
              <HighLightText>TailwindCSS</HighLightText>를 활용해 빠르고 유연하게 UI를 구성하는 방법을 알게됨
            </li>
            <li>팀원들과의 원활한 커뮤니케이션이 개발 속도와 완성도에 큰 영향을 준다는 것을 알게됨</li>
            <li>
              기술적인 완성도뿐 아니라 <HighLightText>&lsquo;왜 이걸 만들었는가&lsquo;</HighLightText>를 고민하는 태도가 프로젝트의 방향성을
              결정한다는 점을 배움
            </li>
          </ul>
        </div>

        <Divider />

        <TableWrapper>
          <Table tableKey="팀 구성" tableValue="프론트엔드 2명, 백엔드 2명, 디자이너 2명" />
          <Table tableKey="주요 기능" tableValue="위치 기반 오디오 재생, 간편한 이야기 기록, 북마크 기능, 직관적인 지도 인터페이스" />
          <Table
            tableKey="Github"
            tableValue={
              <LinkWrapper href="https://github.com/dnd-over-time/over-time-front">https://github.com/dnd-over-time/over-time-front</LinkWrapper>
            }
          />
          <Table
            tableKey="서비스 소개"
            tableValue={<LinkWrapper href="https://www.phaseon.me/se/dongnewatneda">https://www.phaseon.me/se/dongnewatneda</LinkWrapper>}
          />
          <Table tableKey="Frontend" tableValue="Next.js, TypeScript, Tailwind" />
          <Table tableKey="Deployment" tableValue="Vercel" />
        </TableWrapper>
      </ProjectsContainer>
    </ProjectsTemplate>
  );
};

export default DND;

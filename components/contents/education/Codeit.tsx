import Link from "next/link";
import EducationTemplate from "./EducationTemplate";
import logoImage from "/public/images/education/codeit-logo.png";
import styled from "styled-components";
import { LinkWrapper } from "@/components/common/LinkWrapper";

const Codeit = () => {
  return (
    <EducationTemplate logoImage={logoImage} bgColor="#7013f3" title="코드잇 스프린트 프론트엔드 단기심화 10기" date="2025.6.19 - 2025.08.13">
      <ul>
        <li>
          8주 동안 실전 중심의 집중 학습을 통해 “왜 필요한지 알고 직접 만들어보는” 경험을 제공하며, 포트폴리오에 담을 수 있는 고퀄리티 팀 프로젝트를
          완성할 수 있는 기회를 제공
        </li>
        <li>Tailwind CSS 및 CSS 애니메이션 기술 향상</li>
        <li>웹 브라우저 저장소 활용과 상태 관리 경험</li>
        <li>테스트 자동화 기술 습득</li>
        <li>CI/CD 및 배포 자동화 실무 적용</li>
        <li>디자이너·백엔드와 팀 기반 협업 및 QA 경험</li>

        {/* <li>
          <LinkWrapper href="https://devcamp.notion.site/Ottogi-09d1981a093d4af3a083d8ec2cd0074c">[캠프 기간] 팀 노션 링크</LinkWrapper>
        </li> */}
      </ul>
    </EducationTemplate>
  );
};

export default Codeit;

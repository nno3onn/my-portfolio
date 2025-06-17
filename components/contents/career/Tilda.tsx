import CareerTemplate from "./CareerTemplate";
import logoImage from "/public/images/career/tilda-logo.png";
import { Divider } from "@/components/common/Divider";
import { DateWrapper } from "@/components/common/DateWrapper";
import { BoldText } from "@/components/common/BoldText";

const Tilda = () => {
  return (
    <CareerTemplate logoImage={logoImage} companyName="Tilda (틸다)" date="2023.06 - 2024.09">
      <>
        <p>다양한 산업에 AI 기반 프로세스 최적화 솔루션을 제공하는 B2B 기업으로, 실제 비즈니스 효율을 높이는 실용적인 AI 서비스를 제공하는 업체</p>
        <br />
        <p>
          <BoldText>Next.js 기반의 웹 프론트엔드 개발</BoldText>을 담당하였습니다.
        </p>

        <br />
        <Divider />
        <br />

        <BoldText> ▎삼아알미늄 서비스 개발</BoldText>
        <DateWrapper>2024.05-2024.09</DateWrapper>
        <ul>
          <li>Skills: Next.js, Typescript, Zustand, React-Query, Styled-components, MUI</li>
          <li>UI/UX 개발 및 디자인</li>
          <li>ML팀 및 웹팀과 협업하여 서비스 기획 및 백엔드 개발자와 협업하여 API 설계</li>
        </ul>

        <br />
        <BoldText> ▎ArgMax 서비스 개발</BoldText>
        <DateWrapper>2023.07-2024.06</DateWrapper>
        <p>웹으로 쉽게 받아보는 비즈니스 효율화 AI 솔루션 서비스</p>
        <ul>
          <li>Skills: Next.js, Typescript, AWS, React-Query, Zustand, Styled-components, React-hook-form</li>
          <li>ArgMax 서비스와 ArgMax 서비스 관리자 웹 개발</li>
          <li>코드 리팩토링을 통한 코드의 가독성 향상, 복잡성 감소, 개발자 간의 의사소통 향상, 서비스 성능 개선</li>
          <li>UI/UX 개발 및 디자인 시스템 구축</li>
          <li>ML팀 및 웹팀과 협업하여 ArgMax 서비스 기획 및 백엔드 개발자와 협업하여 API 설계</li>
        </ul>

        <br />
        <BoldText> ▎ArgMax 서비스 오픈 웹 개발</BoldText>
        <DateWrapper>2023.06.01-2023.06.30</DateWrapper>
        <ul>
          <li>Skills: Next.js, TypeScript, Ky, MUI, React-Query, React-hook-form, Zustand</li>
          <li>서비스 오픈 일자 카운트 다운 및 1:1 문의 기능 개발</li>
        </ul>
      </>
    </CareerTemplate>
  );
};

export default Tilda;

import { LinkWrapper } from "@/components/common/LinkWrapper";
import EducationTemplate from "./EducationTemplate";
import logoImage from "/public/images/education/sparta-logo.png";

const Sparta = () => {
  return (
    <EducationTemplate logoImage={logoImage} title="스파르타코딩클럽 내일배움캠프 리액트" date="2022.11 - 2023.03">
      <ul>
        <li>스파르타코딩클럽 국비지원 교육과정</li>
        <li>4개의 미니 프로젝트와 1개의 파이널 프로젝트 진행</li>
        <li>
          <LinkWrapper href="https://github.com/Hah-nna/cute7">01) Vanilla js SPA 미니 프로젝트</LinkWrapper>
          <li>
            <LinkWrapper href="https://github.com/Golden-bung-eoppang/Golden-bung-eoppang">02) React 미니 프로젝트: 황금붕어빵</LinkWrapper>
          </li>
          <li>
            <LinkWrapper href="https://github.com/Hah-nna/rn-coin-app">03) React Native 미니 프로젝트: 상평통보</LinkWrapper>
          </li>
          <li>
            <LinkWrapper href="https://github.com/escape-hell/escape-hell">04) React + TypeScript 미니 프로젝트: Escape Hell</LinkWrapper>
          </li>
        </li>
      </ul>
    </EducationTemplate>
  );
};

export default Sparta;

import Link from "next/link";
import EducationTemplate from "./EducationTemplate";
import logoImage from "/public/images/education/smilegate-logo.png";
import styled from "styled-components";
import { LinkWrapper } from "@/components/common/LinkWrapper";

const SmileGate = () => {
  return (
    <EducationTemplate logoImage={logoImage} title="스마일게이트 윈터데브캠프 2기" date="2022.12 - 2023.02">
      <ul>
        <li>스마일게이트 대규모 전국 온라인 개발 캠프</li>
        <li>현업 개발 멘토의 개발자 지식 기본 강의 수강</li>
        <li>현업 개발자의 멘토링 및 코드리뷰</li>
        <li>개인 및 팀 협업 개발 프로젝트 진행</li>
        <li>
          <LinkWrapper href="https://devcamp.notion.site/Ottogi-09d1981a093d4af3a083d8ec2cd0074c">[캠프 기간] 팀 노션 링크</LinkWrapper>
        </li>
        <li>
          <LinkWrapper href="https://jacky0831.notion.site/c45f794c82034d2bb29a7a96fb2e752b">[추가 구현] 팀 노션 링크</LinkWrapper>
        </li>
      </ul>
    </EducationTemplate>
  );
};

export default SmileGate;

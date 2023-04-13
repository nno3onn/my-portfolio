import { LinkWrapper } from "@/components/common/LinkWrapper";
import EducationTemplate from "./EducationTemplate";
import logoImage from "/public/images/education/naver-logo.png";

const NaverConnect = () => {
  return (
    <EducationTemplate logoImage={logoImage} title="네이버 커넥트 Boost Coding Newbie Challenge 2020" date="2020.07 - 2020.08">
      <ul>
        <li>하버드 CS50 강좌를 온라인으로 수강하고 기초 CS 지식을 채우는 교육 과정</li>
        <li>매주 주어지는 미션을 팀원들과 함께 풀이 공유 및 해결</li>
        <li>담당 코치와의 질의응답 및 코드리뷰를 통한 피드백</li>
        <li>
          <LinkWrapper href="https://nno3onn.tistory.com/category/education/%EB%B6%80%EC%8A%A4%ED%8A%B8%20%EC%BD%94%EB%94%A9%20%EB%89%B4%EB%B9%84%20%EC%B1%8C%EB%A6%B0%EC%A7%80%202020%20Summer%3A%20CS50">
            기록 url
          </LinkWrapper>
        </li>
      </ul>
    </EducationTemplate>
  );
};

export default NaverConnect;

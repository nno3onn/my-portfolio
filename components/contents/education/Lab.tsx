import { LinkWrapper } from "@/components/common/LinkWrapper";
import EducationTemplate from "./EducationTemplate";
import logoImage from "/public/images/education/lab-logo.png";

const Lab = () => {
  return (
    <EducationTemplate logoImage={logoImage} title="경북대학교 SoC 연구실 학부연수생" date="2020.09 - 2021.08">
      <>
        <p> ▎ Node.js와 라이브러리를 활용하여 다양한 주제로 연구 및 개발 진행</p>
        <ul>
          <li>총 4개의 프로젝트 진행</li>
          <li>연구실 결과 발표회에서 진행하였던 프로젝트 발표</li>
          <li>
            &apos;
            <LinkWrapper href="https://books.google.co.kr/books/about?id=UyRQEAAAQBAJ&redir_esc=y">
              자바스크립트와 Node.js 실전 프로그래밍: JavaScript와 Node.js로 할 수 있는 모든 것
            </LinkWrapper>
            &apos; 책 집필 및 출판
          </li>
          <li>
            &apos;
            <LinkWrapper href="https://ieeexplore.ieee.org/document/9369755">
              Asynchronous Interaction Framework for Verilog Simulation Virtualization on Node.js
            </LinkWrapper>
            &apos; 논문 집필 후, IEEE ICEIC에 투고 및 발행
          </li>

          <br />

          <p>▎ 대학생 대상으로 연구실 인턴쉽 스터디 강의 진행</p>
          <li>HTML, CSS, JavaScript</li>
          <li>Node.js</li>
          <li>Google Cloud Platform - Dialogflow, TTS, Webhook</li>
        </ul>
      </>
    </EducationTemplate>
  );
};

export default Lab;

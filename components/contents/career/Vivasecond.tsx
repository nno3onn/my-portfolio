import styled from "styled-components";
import CareerTemplate, { HighLightText } from "./CareerTemplate";
import logoImage from "/public/images/career/viva-logo.png";
import { Divider } from "@/components/common/Divider";
import { DateWrapper } from "@/components/common/DateWrapper";

const Vivasecond = () => {
  return (
    <CareerTemplate logoImage={logoImage} companyName="vivasecond (비바세컨드)" date="2021.09 - 2022.04">
      <>
        <p>반려 동물들의 사진 및 동영상을 공유하는 소셜 미디어 플랫폼 자체 개발 및 외부 서비스 개발하는 IT 업체</p>
        <br />
        <p>
          기본적으로 <HighLightText>JavaScript 기반의 웹 프론트엔드 개발</HighLightText>을 담당하였으며, 필요에 따라 풀스택 개발 업무를
          담당하였습니다.
        </p>

        <br />
        <Divider />
        <br />

        <HighLightText> ▎아이코코 서비스 웹 개발</HighLightText>
        <DateWrapper>2021.10 - 2022.04</DateWrapper>
        <p>산모들이 원하는 산후도우미를 쉽고 빠르게 찾고 예약할 수 있는 서비스</p>
        <ul>
          <li>Skills: Next.js, Firebase, ElasticSearch, ScSS, Node.js</li>
          <li>웹 풀스택 개발자로 참여 (앱 개발자 1명, 웹 풀스택 개발자 1명)</li>
          <li>회사 계정 관리 및 아이코코 서비스의 모든 게시글을 관리하는 ERP 웹 개발</li>
          <li>통계 관리, 도우미 추가 및 상태관리, 사용자와 산후조리 도우미를 매칭하는 관리자 웹 개발</li>
          <li>ElasticSearch를 활용하여 무한 스크롤 기능, 특정 태그에 따른 게시글 데이터 받기, 정렬 기능 구현하는 API 생성</li>
          <li>Firebase Functions를 활용하여 매일 자정에 DB 내 데이터 변경</li>
          <li>앱 개발자와의 협업 및 DB 설계</li>
        </ul>

        <br />
        <HighLightText> ▎북구 교복나눔 서비스 수정 및 기능 추가</HighLightText>
        <DateWrapper>2021.09</DateWrapper>
        <p>교복 외 참고서와 다양한 물품을 자유롭게 기부하고 나눌 수 있는 모바일 기부 서비스</p>
        <ul>
          <li>Skills: Next.js, Node.js, Express, MongoDB, Firebase</li>
          <li>Firebase Firestore에서 MongoDB로 모든 데이터를 옮기고, DB를 MongoDB로 변경하도록 코드 수정하기</li>
          <li>클라이언트 측에서 요구한 수정사항들을 반영하여 서비스의 서버와 물품들을 관리하는 관리자 웹 수정 및 추가 기능 구현</li>
        </ul>

        <br />
        <HighLightText> ▎자체 서비스 withpaw의 동영상 압축 업무 담당</HighLightText>
        <DateWrapper>2021.09</DateWrapper>
        <ul>
          <li>반려 동물들의 사진과 동영상을 서버에 저용량으로 올리기 위해 압축 라이브러리를 활용하여 파일 사이즈 압축</li>
          <li>다양한 사진 압축 라이브러리를 비교해보고, 적은 메모리로 빠르게 실행되는 sharp 라이브러리를 활용하여 이미지 압축 코드 작성</li>
          <li>비디오 인코더 종류별로 직접 테스트 및 비교 분석해보고, libx265 코덱을 사용하여 비디오 압축 코드 작성</li>
        </ul>
      </>
    </CareerTemplate>
  );
};

export default Vivasecond;

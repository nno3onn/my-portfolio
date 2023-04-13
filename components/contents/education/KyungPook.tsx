import EducationTemplate from "./EducationTemplate";
import logoImage from "/public/images/education/kyungpook-logo.png";

const KyungPook = () => {
  return (
    <EducationTemplate logoImage={logoImage} title="경북대학교 전자공학부" date="2016.03 - 2020.02">
      <ul>
        2019 경북대학교 캡스톤 경진대회 &apos;아이옷&apos;팀 우수상 수상
        <li>IoT 기반 화재 안전 비상대피 및 구조 시스템 구현 프로젝트</li>
        <li>안드로이드 앱 개발 담당 (팀 구성 - 아두이노 2명, 라즈베리파이 2명, 안드로이드 앱 1명, 서버 1명)</li>
      </ul>
    </EducationTemplate>
  );
};

export default KyungPook;

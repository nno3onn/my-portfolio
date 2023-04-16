import { Divider } from "@/components/common/Divider";
import CareerTemplate, { HighLightText } from "./CareerTemplate";
import logoImage from "/public/images/career/ailtos-logo.png";

const Ailtos = () => {
  return (
    <CareerTemplate logoImage={logoImage} companyName="Ailtos (아일토스)" date="2020.04 - 2020.05">
      <>
        <p>외부 서비스를 개발하는 SI 업체</p>
        <br />

        <p>
          2020년 2월 17일부터 교내 현장실습으로 업무하였고, 2020년 4월에 정직원으로 입사하게 되었습니다. Dart 언어를 사용하여 Flutter로 앱 개발 업무를
          담당하였습니다.
        </p>

        <br />
        <Divider />
        <br />

        <HighLightText>▎pixcolo 서비스 앱 개발</HighLightText>
        <p>정육면체 종이 자석블럭을 앱에서 도면으로 제작하여 사용자들과 공유하는 앱 서비스</p>
        <ul>
          <li>Skills: Dart, Flutter, GraphQL</li>
          <li>앱 개발자로 참여 (앱 개발자 1명, 백엔드 개발자 1명)</li>
          <li>Flutter로 전제 화면 UI 구현 및 서비스 기능 개발</li>
          <li>GraphQL를 활용하여 유저의 동작에 따른 데이터 CRUD 처리</li>
        </ul>
      </>
    </CareerTemplate>
  );
};

export default Ailtos;

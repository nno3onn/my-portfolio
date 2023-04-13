import styled from "styled-components";
import SmileGate from "./education/SmileGate";
import Sparta from "./education/Sparta";
import NaverConnect from "./education/NaverConnect";
import KyungPook from "./education/KyungPook";
import { SectionWrapper } from "../common/SectionWrapper";
import SectionTitleWrapper from "../common/SectionTitleWrapper";
import Lab from "./education/Lab";

const Education = () => {
  return (
    <EducationContainer>
      <SectionWrapper>
        <SectionTitleWrapper>EDUCATION</SectionTitleWrapper>

        <EducationList>
          <SmileGate />
          <Sparta />
          <NaverConnect />
          <Lab />
          <KyungPook />
        </EducationList>
      </SectionWrapper>
    </EducationContainer>
  );
};

const EducationContainer = styled.div``;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export default Education;

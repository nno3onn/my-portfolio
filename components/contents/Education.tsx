import styled from "styled-components";
import SmileGate from "./education/SmileGate";
import Sparta from "./education/Sparta";
import NaverConnect from "./education/NaverConnect";
import KyungPook from "./education/KyungPook";
import { SectionWrapper } from "../common/SectionWrapper";
import SectionTitleWrapper from "../common/SectionTitleWrapper";
import Lab from "./education/Lab";
import { RefObject } from "react";
import Codeit from "./education/Codeit";

interface EducationProps {
  element: RefObject<HTMLDivElement>;
}

const Education = ({ element }: EducationProps) => {
  return (
    <SectionWrapper ref={element}>
      <SectionTitleWrapper>EDUCATION</SectionTitleWrapper>

      <EducationList>
        <Codeit />
        <SmileGate />
        <Sparta />
        <NaverConnect />
        <Lab />
        <KyungPook />
      </EducationList>
    </SectionWrapper>
  );
};

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export default Education;

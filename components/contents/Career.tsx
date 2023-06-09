import styled from "styled-components";
import Ailtos from "./career/Ailtos";
import Vivasecond from "./career/Vivasecond";
import { SectionWrapper } from "../common/SectionWrapper";
import SectionTitleWrapper from "../common/SectionTitleWrapper";
import { RefObject } from "react";

interface CareerProps {
  element: RefObject<HTMLDivElement>;
}

const Career = ({ element }: CareerProps) => {
  return (
    <CareerContainer ref={element}>
      <SectionWrapper>
        <SectionTitleWrapper color="black">CAREER</SectionTitleWrapper>

        <CompanyList>
          <Vivasecond />
          <Ailtos />
        </CompanyList>
      </SectionWrapper>
    </CareerContainer>
  );
};

const CareerContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor.grey};
`;

const CompanyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export default Career;

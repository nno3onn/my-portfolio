import styled from "styled-components";
import { StaticImageData } from "next/image";
import { ReactElement } from "react";
import LogoImage from "@/components/common/LogoImage";
import { Divider } from "@/components/common/Divider";
import { DateWrapper } from "@/components/common/DateWrapper";
import { SubTitleWrapper } from "@/components/common/SubTitleWrapper";
import { DescriptionWrapper } from "@/components/common/DescriptionWrapper";

interface CareerTemplateProps {
  logoImage: StaticImageData;
  companyName: string;
  date: string;
  description: ReactElement;
  children: ReactElement;
}

const CareerTemplate = ({ logoImage, companyName, date, description, children }: CareerTemplateProps) => {
  return (
    <CareerTemplateContainer>
      <LogoImage logoImage={logoImage} />

      <Divider />

      <InfoContainer>
        <SubTitleWrapper>{companyName}</SubTitleWrapper>
        <DateWrapper>{date}</DateWrapper>
        <DescriptionWrapper>{description}</DescriptionWrapper>
      </InfoContainer>
    </CareerTemplateContainer>
  );
};

const CareerTemplateContainer = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CareerTemplate;

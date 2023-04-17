import styled from "styled-components";
import { StaticImageData } from "next/image";
import { ReactElement } from "react";
import LogoImage from "@/components/common/LogoImage";
import { Divider } from "@/components/common/Divider";
import { DateWrapper } from "@/components/common/DateWrapper";
import { SubTitleWrapper } from "@/components/common/SubTitleWrapper";
import { DescriptionWrapper } from "@/components/common/DescriptionWrapper";
import useDark from "@/hooks/useDark";

interface CareerTemplateProps {
  logoImage: StaticImageData;
  companyName: string;
  date: string;
  children: ReactElement;
}

const CareerTemplate = ({ logoImage, companyName, date, children }: CareerTemplateProps) => {
  const dark = useDark();

  return (
    <CareerTemplateContainer>
      <LogoImage logoImage={logoImage} />

      <Divider />

      <InfoContainer>
        <SubTitleWrapper dark={dark}>{companyName}</SubTitleWrapper>
        <DateWrapper>{date}</DateWrapper>
        <DescriptionWrapper dark={dark}>{children}</DescriptionWrapper>
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
  flex: 1 4;
`;

export default CareerTemplate;

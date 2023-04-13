import { DateWrapper } from "@/components/common/DateWrapper";
import { DescriptionWrapper } from "@/components/common/DescriptionWrapper";
import { Divider } from "@/components/common/Divider";
import LogoImage from "@/components/common/LogoImage";
import { SubTitleWrapper } from "@/components/common/SubTitleWrapper";
import { StaticImageData } from "next/image";
import { ReactElement } from "react";
import styled from "styled-components";

interface EducationTemplateProps {
  logoImage: StaticImageData;
  title: string;
  date: string;
  children: ReactElement;
}

const EducationTemplate = ({ logoImage, title, date, children }: EducationTemplateProps) => {
  return (
    <EducationTemplateContainer>
      <LogoImage logoImage={logoImage} />

      <Divider />

      <InfoContainer>
        <SubTitleWrapper>{title}</SubTitleWrapper>
        <DateWrapper>{date}</DateWrapper>
        <DescriptionWrapper>{children}</DescriptionWrapper>
      </InfoContainer>
    </EducationTemplateContainer>
  );
};

const EducationTemplateContainer = styled.div`
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

export default EducationTemplate;

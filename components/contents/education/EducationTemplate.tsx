import { DateWrapper } from "@/components/common/DateWrapper";
import { DescriptionWrapper } from "@/components/common/DescriptionWrapper";
import { Divider } from "@/components/common/Divider";
import LogoImage from "@/components/common/LogoImage";
import { SubTitleWrapper } from "@/components/common/SubTitleWrapper";
import useDark from "@/hooks/useDark";
import { StaticImageData } from "next/image";
import { ReactElement } from "react";
import styled from "styled-components";

interface EducationTemplateProps {
  logoImage: StaticImageData;
  bgColor?: string;
  title: string;
  date: string;
  children: ReactElement;
}

const EducationTemplate = ({ logoImage, bgColor, title, date, children }: EducationTemplateProps) => {
  const dark = useDark();

  return (
    <EducationTemplateContainer>
      <LogoImage logoImage={logoImage} bgColor={bgColor} />

      <Divider />

      <InfoContainer>
        <SubTitleWrapper dark={dark}>{title}</SubTitleWrapper>
        <DateWrapper>{date}</DateWrapper>
        <DescriptionWrapper dark={dark}>{children}</DescriptionWrapper>
      </InfoContainer>
    </EducationTemplateContainer>
  );
};

const EducationTemplateContainer = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex: 1 4;
  flex-direction: column;
`;

export default EducationTemplate;

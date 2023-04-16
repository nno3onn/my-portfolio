import { DateWrapper } from "@/components/common/DateWrapper";
import { DescriptionWrapper } from "@/components/common/DescriptionWrapper";
import { Divider } from "@/components/common/Divider";
import LogoImage from "@/components/common/LogoImage";
import { SubTitleWrapper } from "@/components/common/SubTitleWrapper";
import { useTheme } from "next-themes";
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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <EducationTemplateContainer>
      <LogoImage logoImage={logoImage} />

      <Divider />

      <InfoContainer>
        <SubTitleWrapper isDark={isDark}>{title}</SubTitleWrapper>
        <DateWrapper>{date}</DateWrapper>
        <DescriptionWrapper isDark={isDark}>{children}</DescriptionWrapper>
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

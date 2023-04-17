import ContentsWrapper from "@/components/common/ContentsWrapper";
import { ReactElement } from "react";
import styled from "styled-components";

interface ContentsTitleWrapperProps {
  logo: ReactElement;
  title: string;
}

const ContentsTitleWrapper = ({ logo, title }: ContentsTitleWrapperProps) => (
  <TitleContainer>
    {logo}
    {title}
  </TitleContainer>
);

interface ArchivingTemplateProps {
  logo: ReactElement;
  title: string;
  link: string;
  description: string;
  children: ReactElement;
}

const ArchivingTemplate = ({ logo, title, link, description, children }: ArchivingTemplateProps) => {
  return (
    <ContentsWrapper
      width={420}
      height={308}
      padding={28}
      title={ContentsTitleWrapper({
        logo,
        title,
      })}
      url={link}
    >
      <URLWrapper>{link}</URLWrapper>
      <Description>{description}</Description>
      {children}
    </ContentsWrapper>
  );
};

const Description = styled.div`
  font-weight: bold;
  margin-bottom: 24px;
`;

const URLWrapper = styled.div`
  margin-bottom: 24px;

  color: ${({ theme }) => theme.fontColor.blue};
`;

const TitleContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;

  display: flex;
  align-items: center;
  gap: 16px;

  margin-bottom: 24px;
`;

export default ArchivingTemplate;

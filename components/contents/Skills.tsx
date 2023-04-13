import styled from "styled-components";
import Image from "next/image";
import frontendImage from "/public/images/skills/frontend.png";
import versionImage from "/public/images/skills/version.png";
import backendImage from "/public/images/skills/backend.png";
import deploymentImage from "/public/images/skills/deployment.png";
import communicationImage from "/public/images/skills/communication.png";
import ContentsWrapper from "../common/ContentsWrapper";
import { SectionWrapper } from "../common/SectionWrapper";
import SectionTitleWrapper from "../common/SectionTitleWrapper";

const ContentsTitleWrapper = (title: string) => <TitleContainer>{title}</TitleContainer>;

const Skills = () => {
  return (
    <SkillsContainer>
      <SectionWrapper>
        <SectionTitleWrapper>SKILLS</SectionTitleWrapper>

        <SkillsList>
          <ContentsWrapper width={318} title={ContentsTitleWrapper("Frontend")}>
            <Image width="270" src={frontendImage} alt="frontend skills" />
          </ContentsWrapper>

          <ContentsWrapper width={318} title={ContentsTitleWrapper("Backend")}>
            <Image width="270" src={backendImage} alt="backend skills" />
          </ContentsWrapper>

          <ContentsWrapper width={318} title={ContentsTitleWrapper("Communication")}>
            <Image width="200" src={communicationImage} alt="communication skills" />
          </ContentsWrapper>

          <ContentsWrapper width={318} title={ContentsTitleWrapper("Version Control")}>
            <Image width="250" src={versionImage} alt="version control skills" />
          </ContentsWrapper>

          <ContentsWrapper width={318} title={ContentsTitleWrapper("Deployment")}>
            <Image width="270" src={deploymentImage} alt="deployment skills" />
          </ContentsWrapper>
        </SkillsList>
      </SectionWrapper>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor.yellow};
`;

const SkillsList = styled.div`
  column-count: 3;
  column-gap: 40px;

  @media (max-width: 1024px) {
    column-count: 1;
  }
`;

const TitleContainer = styled.div`
  padding-bottom: 16px;
  margin-bottom: 24px;

  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.backgroundColor.orange};
  border-bottom: 1px solid ${({ theme }) => theme.fontColor.grey2};
`;

export default Skills;

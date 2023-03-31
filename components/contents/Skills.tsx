import { useTheme } from "next-themes";
import styled from "styled-components";
import { ContentsWrapper } from "../wrapper/ContentsWrapper";
import SkillsWrapper from "../wrapper/SkillsWrapper";
import { Title } from "../wrapper/Title";
import Image from "next/image";
import frontendImage from "/public/images/frontend.png";
import versionImage from "/public/images/version.png";
import backendImage from "/public/images/backend.png";
import deploymentImage from "/public/images/deployment.png";
import communicationImage from "/public/images/communication.png";

const Skills = () => {
  const { theme } = useTheme();

  return (
    <SkillsContainer>
      <ContentsWrapper>
        <Title isDark={theme === "dark"}>SKILLS</Title>
        <SkillsList>
          <SkillsWrapper title="Frontend">
            <Image width="270" src={frontendImage} alt="frontend skills" />
          </SkillsWrapper>

          <SkillsWrapper title="Backend">
            <Image width="270" src={backendImage} alt="backend skills" />
          </SkillsWrapper>

          <SkillsWrapper title="Communication">
            <Image width="200" src={communicationImage} alt="communication skills" />
          </SkillsWrapper>

          <SkillsWrapper title="Version Control">
            <Image width="250" src={versionImage} alt="frontend skills" />
          </SkillsWrapper>

          <SkillsWrapper title="Deployment">
            <Image width="270" src={deploymentImage} alt="deployment skills" />
          </SkillsWrapper>
        </SkillsList>
      </ContentsWrapper>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor.yellow};
`;

const SkillsList = styled.div`
  column-count: 3;
  column-gap: 40px;

  @media (max-width: 992px) {
    column-count: 2;
  }
`;

export default Skills;

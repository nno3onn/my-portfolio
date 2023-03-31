import { useTheme } from "next-themes";
import styled from "styled-components";
import { ContentsWrapper } from "../wrapper/ContentsWrapper";
import { Title } from "../wrapper/Title";

const Skills = () => {
  const { theme } = useTheme();

  return (
    <SkillsContainer>
      <ContentsWrapper>
        <Title isDark={theme === "dark"}>Skills</Title>
      </ContentsWrapper>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.div``;

export default Skills;

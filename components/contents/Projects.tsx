import styled from "styled-components";
import SectionTitleWrapper from "../common/SectionTitleWrapper";
import { SectionWrapper } from "../common/SectionWrapper";
import { RefObject } from "react";
import Portfolio from "./projects/Portfolio";
import CodeFolio from "./projects/CodeFolio";
import Applog from "./projects/Applog";
import Discord from "./projects/Discord";
import Coorder from "./projects/Coorder";
import MookMook from "./projects/MookMook";
import { useTheme } from "next-themes";
import Icoco from "./projects/Icoco";

interface ProjectsProps {
  element: RefObject<HTMLDivElement>;
}

const Projects = ({ element }: ProjectsProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <ProjectsContainer ref={element}>
      <SectionWrapper>
        <SectionTitleWrapper color="white">PROJECTS</SectionTitleWrapper>

        <ContentsContainer>
          <Portfolio isDark={isDark} />
          <CodeFolio isDark={isDark} />
          <Discord isDark={isDark} />
          <Applog isDark={isDark} />
          <Coorder isDark={isDark} />
          <Icoco isDark={isDark} />
          <MookMook isDark={isDark} />
        </ContentsContainer>
      </SectionWrapper>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor.blue};
`;

const ContentsContainer = styled.div`
  width: 100%;
`;

export default Projects;

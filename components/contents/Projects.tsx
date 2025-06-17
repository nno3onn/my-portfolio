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
import Icoco from "./projects/Icoco";
import DND from "./projects/DND";
import Delog from "./projects/Delog";

interface ProjectsProps {
  element: RefObject<HTMLDivElement>;
}

const Projects = ({ element }: ProjectsProps) => {
  return (
    <ProjectsContainer ref={element}>
      <SectionWrapper>
        <SectionTitleWrapper color="white">PROJECTS</SectionTitleWrapper>

        <ContentsContainer>
          <Delog />
          <DND />
          <Portfolio />
          <CodeFolio />
          <Discord />
          <Applog />
          <Coorder />
          <Icoco />
          <MookMook />
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

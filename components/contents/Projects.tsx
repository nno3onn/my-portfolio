import styled from "styled-components";
import ContentsWrapper from "../common/ContentsWrapper";
import SectionTitleWrapper from "../common/SectionTitleWrapper";
import { SectionWrapper } from "../common/SectionWrapper";

const Projects = () => {
  return (
    <ProjectsContainer>
      <SectionWrapper>
        <SectionTitleWrapper color="white">PROJECTS</SectionTitleWrapper>

        <ContentsContainer>
          <ContentsWrapper>
            <>d</>
          </ContentsWrapper>
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

import styled from "styled-components";
import About from "./About";
import Archiving from "./Archiving";
import Career from "./Career";
import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";

const Contents = () => {
  return (
    <ContentsContainer>
      <Intro />
      <About />
      <Skills />
      <Archiving />
      <Projects />
      <Education />
      <Career />
    </ContentsContainer>
  );
};

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Contents;

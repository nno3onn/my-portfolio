import styled from "styled-components";
import About from "./About";
import Archiving from "./Archiving";
import Career from "./Career";
import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";

const Contents = () => {
  return (
    <ContentsContainer>
      <Intro />
      <About />
      <Skills />
      <Archiving />
      <Projects />
      <Career />
    </ContentsContainer>
  );
};

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Contents;

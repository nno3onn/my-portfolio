import styled from "styled-components";
import About from "./About";
import Archiving from "./Archiving";
import Career from "./Career";
import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";

interface ContentsProps {
  moveTable: Record<string, any>;
}

const Contents = ({ moveTable }: ContentsProps) => {
  return (
    <ContentsContainer>
      <Intro moveToScroll={moveTable["about"].onMoveToElement} />
      <About element={moveTable["about"].element} />
      <Skills element={moveTable["skills"].element} />
      <Archiving element={moveTable["archiving"].element} />
      <Projects element={moveTable["projects"].element} />
      <Education element={moveTable["education"].element} />
      <Career element={moveTable["career"].element} />
    </ContentsContainer>
  );
};

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Contents;

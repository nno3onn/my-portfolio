import styled from "styled-components";
import Archiving from "./Archiving";
import Career from "./Career";
import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";

const Contents = () => {
  return (
    <ContentsContainer>
      <Intro />
      <Skills />
      <Archiving />
      <Projects />
      <Career />
    </ContentsContainer>
  );
};

const ContentsContainer = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  max-width: 1158px;
`;

export default Contents;

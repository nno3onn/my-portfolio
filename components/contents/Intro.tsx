import styled from "styled-components";
import backgroundImage from "/public/images/skills/developer.jpg";
import { useTheme } from "next-themes";
import { SectionWrapper } from "../common/SectionWrapper";
import { RefObject } from "react";

interface IntroProps {
  moveToScroll: () => void;
}

const Intro = ({ moveToScroll }: IntroProps) => {
  const { theme } = useTheme();
  const dark = theme === "dark";

  return (
    <IntroContainer style={{ backgroundImage: `url(${backgroundImage.src})` }}>
      <BackgroundBlur dark={dark}>
        <SectionWrapper>
          <Title dark={dark}>
            <h1>- 허다은 -</h1>
            <h1>웹 프론트엔드 개발자</h1>
          </Title>

          <Divider />

          <Paragraph dark={dark}>
            <p>안녕하세요,</p>
            <p>코드 한 줄에도 논리적인 견해를 가지고 작성하는 개발자가 되고 싶습니다.</p>
          </Paragraph>

          <MoreButton onClick={moveToScroll}>더 알아보기 ↓</MoreButton>
        </SectionWrapper>
      </BackgroundBlur>
    </IntroContainer>
  );
};

const IntroContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 600px;

  display: flex;
  justify-content: center;

  background-position: center;
  background-size: cover;
`;

const BackgroundBlur = styled.div<{ dark: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ dark }) => (dark ? "#444444b2" : "#ffffffb2")};
`;

const Title = styled.div<{ dark: boolean }>`
  text-align: center;
  line-height: 100px;
  font-weight: 900;
  color: ${({ theme, dark }) => theme.fontColor[dark ? "white" : "black"]};
  font-size: ${({ theme }) => theme.fontSize.xxxl};
`;

const Paragraph = styled.div<{ dark: boolean }>`
  text-align: center;
  line-height: 1.5;
  color: ${({ theme, dark }) => theme.fontColor[dark ? "inactive-dark" : "inactive-light"]};
  font-size: ${({ theme }) => theme.fontSize.lg};

  margin-bottom: 32px;
`;

const Divider = styled.div`
  height: 3px;
  width: 52px;
  margin: 24px auto;
  background-color: ${({ theme }) => theme.backgroundColor.orange};
`;

const MoreButton = styled.div`
  width: fit-content;
  margin: auto;
  padding: 16px 32px;
  border-radius: 25px;
  color: ${({ theme }) => theme.fontColor.white};
  background-color: ${({ theme }) => theme.backgroundColor.orange};
  transition: all 0.2s ease-in-out;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor["hover-orange"]};
  }
`;

export default Intro;

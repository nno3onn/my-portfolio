import styled from "styled-components";
import backgroundImage from "/public/images/skills/developer.jpg";
import { SectionWrapper } from "../common/SectionWrapper";
import useDark from "@/hooks/useDark";

interface IntroProps {
  moveToScroll: () => void;
}

const Intro = ({ moveToScroll }: IntroProps) => {
  const dark = useDark();

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
  width: 100%;
  height: 600px;

  display: flex;
  justify-content: center;

  background-position: center;
  background-size: cover;
`;

const BackgroundBlur = styled.div<{ dark: DarkType }>`
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: 68px;
  background-color: ${({ dark }) => (dark === null ? "transparent" : dark ? "#444444b2" : "#ffffffb2")};

  word-break: keep-all;
`;

const Title = styled.div<{ dark: DarkType }>`
  text-align: center;
  line-height: 100px;
  font-weight: 900;
  color: ${({ theme, dark }) => theme.fontColor[dark ? "white" : "black"]};
  font-size: ${({ theme }) => theme.fontSize.xxxl};

  @media (max-width: 768px) {
    line-height: 80px;
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;
const Divider = styled.div`
  width: 52px;
  height: 3px;
  margin: 24px auto;
  background-color: ${({ theme }) => theme.backgroundColor.orange};
`;

const Paragraph = styled.div<{ dark: DarkType }>`
  text-align: center;
  line-height: 1.5;
  color: ${({ theme, dark }) => theme.fontColor[dark ? "inactive-dark" : "inactive-light"]};
  font-size: ${({ theme }) => theme.fontSize.lg};

  margin-bottom: 32px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    font-size: ${({ theme }) => theme.fontSize.base};
  }
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

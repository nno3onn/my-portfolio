import { useTheme } from "next-themes";
import Link from "next/link";
import styled from "styled-components";
import { SectionWrapper } from "../common/SectionWrapper";
import SectionTitleWrapper from "../common/SectionTitleWrapper";
import { RefObject } from "react";

interface AboutProps {
  element: RefObject<HTMLDivElement>;
}

const About = ({ element }: AboutProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <SectionWrapper ref={element}>
      <SectionTitleWrapper>ABOUT ME</SectionTitleWrapper>

      <InfoWrapper isDark={isDark}>
        <ItemWrapper>
          <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
          <TextWrapper>
            <h1>이름</h1>
            <p>허다은</p>
          </TextWrapper>
        </ItemWrapper>

        <ItemWrapper>
          <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
              clipRule="evenodd"
            />
          </svg>
          <TextWrapper>
            <h1>생년월일</h1>
            <p>1997.05.11</p>
          </TextWrapper>
        </ItemWrapper>

        <ItemWrapper>
          <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
          </svg>
          <TextWrapper>
            <h1>학력</h1>
            <p>경북대학교</p>
            <p>(전자공학부)</p>
          </TextWrapper>
        </ItemWrapper>

        <ItemWrapper>
          <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
          <TextWrapper>
            <h1>연락처</h1>
            <Link href="tel:010-6305-8727">010-6305-8727</Link>
          </TextWrapper>
        </ItemWrapper>

        <ItemWrapper>
          <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          <TextWrapper>
            <h1>이메일</h1>
            <Link href="mailto:nno3onn@naver.com">nno3onn@naver.com</Link>
          </TextWrapper>
        </ItemWrapper>

        <ItemWrapper>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <TextWrapper>
            <h1>깃허브</h1>
            <Link href="https://github.com/nno3onn">Click!</Link>
          </TextWrapper>
        </ItemWrapper>
      </InfoWrapper>
    </SectionWrapper>
  );
};

const InfoWrapper = styled.div<{ isDark: boolean }>`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 24px;
  flex-flow: wrap;

  color: ${({ theme, isDark }) => theme.fontColor[isDark ? "inactive-dark" : "paragraph"]};
  svg {
    fill: ${({ theme, isDark }) => theme.fontColor[isDark ? "white" : "black"]};
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 575px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ItemWrapper = styled.div`
  height: 60px;

  display: flex;

  gap: 32px;
  margin-bottom: 32px;
  margin-left: auto;
  margin-right: auto;
`;

const TextWrapper = styled.div`
  line-height: 1.5;
  min-width: 160px;

  h1 {
    margin-bottom: 8px;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.lg};
  }

  a {
    &:hover {
      color: ${({ theme }) => theme.backgroundColor.orange};
    }
  }
`;

export default About;

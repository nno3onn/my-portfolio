import styled from "styled-components";
import ContentsWrapper from "../common/ContentsWrapper";
import { ReactNode } from "react";
import { SectionWrapper } from "../common/SectionWrapper";
import SectionTitleWrapper from "../common/SectionTitleWrapper";

interface ContentsTitleWrapperProps {
  logo: ReactNode;
  title: string;
}

const ContentsTitleWrapper = ({ logo, title }: ContentsTitleWrapperProps) => (
  <TitleContainer>
    {logo}
    {title}
  </TitleContainer>
);

const Archiving = () => {
  return (
    <ArchivingContainer>
      <SectionWrapper>
        <SectionTitleWrapper color="white">ARCHIVING</SectionTitleWrapper>

        <ContentsContainer>
          <ContentsWrapper
            width={420}
            height={300}
            title={ContentsTitleWrapper({
              logo: (
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                  <title>github-circle</title>
                  <path d="M12 0.75c-6.213 0-11.25 5.037-11.25 11.25s5.037 11.25 11.25 11.25 11.25-5.037 11.25-11.25-5.037-11.25-11.25-11.25zM21.75 12c0 0.001 0 0.002 0 0.004 0 4.454-2.986 8.21-7.066 9.375l-0.069 0.017v-3.648q0-1.298-0.696-1.9c0.516-0.052 0.983-0.137 1.435-0.255l-0.064 0.014c0.479-0.134 0.897-0.312 1.284-0.536l-0.026 0.014c0.425-0.234 0.784-0.531 1.080-0.884l0.005-0.006q0.435-0.529 0.709-1.405t0.274-2.014q0-1.619-1.057-2.757 0.495-1.218-0.107-2.73-0.375-0.121-1.084 0.147c-0.475 0.176-0.88 0.374-1.263 0.607l0.032-0.018-0.509 0.321c-0.77-0.221-1.655-0.348-2.57-0.348s-1.799 0.127-2.638 0.364l0.068-0.016c-0.59-1.127-2.086-1.199-2.837-1.057-0.5 0.797-0.44 2.054-0.094 2.73q-1.057 1.138-1.057 2.757 0 1.138 0.274 2.007t0.703 1.405c0.296 0.363 0.653 0.663 1.059 0.887l0.019 0.009c0.361 0.21 0.779 0.389 1.219 0.513l0.038 0.009c0.389 0.105 0.856 0.189 1.333 0.238l0.039 0.003q-0.535 0.482-0.656 1.379c-0.173 0.084-0.374 0.153-0.585 0.198l-0.017 0.003c-0.214 0.043-0.46 0.067-0.711 0.067-0.018 0-0.036-0-0.054-0l0.003 0q-0.442 0-0.877-0.288t-0.743-0.837c-0.166-0.281-0.383-0.513-0.642-0.691l-0.007-0.005q-0.395-0.268-0.662-0.321l-0.121-0.027c-0.020-0.005-0.044-0.008-0.068-0.008-0.12 0-0.224 0.068-0.275 0.167l-0.001 0.002-0.016 0.031c-0.022 0.041-0.034 0.090-0.034 0.142 0 0.125 0.073 0.232 0.179 0.281l0.002 0.001q0.294 0.134 0.582 0.509c0.159 0.198 0.3 0.422 0.413 0.662l0.009 0.020 0.134 0.308c0.113 0.336 0.318 0.617 0.585 0.82l0.004 0.003c0.25 0.196 0.553 0.337 0.884 0.399l0.013 0.002c0.276 0.054 0.597 0.088 0.925 0.094l0.005 0c0.037 0.001 0.081 0.002 0.125 0.002 0.218 0 0.432-0.018 0.64-0.052l-0.023 0.003 0.308-0.053q0 0.508 0.007 1.191c0.003 0.276 0.005 1.027 0.006 1.582-4.213-1.141-7.262-4.93-7.262-9.431 0-4.014 2.424-7.462 5.889-8.959l0.063-0.024c1.121-0.487 2.426-0.77 3.798-0.77 5.383 0 9.747 4.364 9.747 9.747 0 0.003 0 0.006 0 0.009v-0z"></path>
                </svg>
              ),
              title: "GitHub",
            })}
            url="https://github.com/nno3onn"
          >
            <LinkWrapper>https://github.com/nno3onn</LinkWrapper>
            <Description>소스 코드 저장소</Description>
            <ul>
              <li>개인적으로 코딩 연습을 위해 작성한 소스 코드</li>
              <li>프로젝트의 소스 코드</li>
            </ul>
          </ContentsWrapper>

          <ContentsWrapper
            width={420}
            title={ContentsTitleWrapper({
              logo: (
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 459 459">
                  <path d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z" />
                </svg>
              ),
              title: "TISTORY",
            })}
            url="https://nno3onn.tistory.com"
          >
            <LinkWrapper>https://nno3onn.tistory.com</LinkWrapper>
            <Description>기록용 개발 블로그</Description>
            <ul>
              <li>배운 것을 진정으로 나의 것을 만들기 위한 기록</li>
              <li>개발 과정에서 개인적으로 궁금했던 지식들 정리</li>
              <li>교육 프로그램 수강 과정에서 배우고 느낀 점들 정리</li>
              <li>프로젝트 진행 시 이슈 해결 및 개발 과정 기록</li>
            </ul>
          </ContentsWrapper>
        </ContentsContainer>
      </SectionWrapper>
    </ArchivingContainer>
  );
};

const ArchivingContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor.black};
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;

  li {
    margin-bottom: 12px;
  }
`;

const LinkWrapper = styled.div`
  margin-bottom: 24px;
  color: ${({ theme }) => theme.fontColor.blue};
`;

const Description = styled.div`
  font-weight: bold;
  margin-bottom: 24px;
`;

const TitleContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;

  display: flex;
  align-items: center;
  gap: 16px;

  margin-bottom: 24px;
`;

export default Archiving;

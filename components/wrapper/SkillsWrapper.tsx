import { useTheme } from "next-themes";
import { ReactNode } from "react";
import styled from "styled-components";

interface SkillsWrapperProps {
  title: string;
  children: ReactNode;
}

const SkillsWrapper = ({ title, children }: SkillsWrapperProps) => {
  return (
    <SkillsWrapperContainer>
      <SkillTitle>{title}</SkillTitle>
      {children}
    </SkillsWrapperContainer>
  );
};

const SkillsWrapperContainer = styled.div`
  width: 318px;
  padding: 24px;
  margin-bottom: 32px;
  border-radius: 24px;

  box-shadow: ${({ theme }) => theme.backgroundColor["box-shadow"]};
  background-color: ${({ theme }) => theme.backgroundColor.white};

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(12px);
  }
`;

const SkillTitle = styled.div`
  padding-bottom: 16px;
  margin-bottom: 24px;

  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.backgroundColor.orange};
  border-bottom: 1px solid ${({ theme }) => theme.fontColor.grey2};
`;

export default SkillsWrapper;

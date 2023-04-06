import { useTheme } from "next-themes";
import Link from "next/link";
import styled from "styled-components";
import DarkModeToggleButton from "./DarkModeToggleButton";
import useScrollDirection, { DirectionType } from "@/hooks/useScrollDirection";
import useScrollTop from "@/hooks/useScrollTop";

const Header = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollDirection = useScrollDirection();
  const isScrollTop = useScrollTop();

  console.log(isScrollTop);

  return (
    <HeaderContainer isDark={isDark} isScrollTop={isScrollTop} scrollDirection={scrollDirection}>
      <HeaderContent>
        <Title href="/" type={theme}>
          nno3onn&#39;s Portfolio
        </Title>
        <HeaderRightContainer>
          <LinkWrapper href="#about" type={theme}>
            About me
          </LinkWrapper>
          <LinkWrapper href="#skills" type={theme}>
            Skills
          </LinkWrapper>
          <LinkWrapper href="#archiving" type={theme}>
            Archiving
          </LinkWrapper>
          <LinkWrapper href="#projects" type={theme}>
            Projects
          </LinkWrapper>
          <LinkWrapper href="#career" type={theme}>
            Career
          </LinkWrapper>
          <DarkModeToggleButton />
        </HeaderRightContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};

interface HeaderContainerProps {
  isDark: boolean;
  isScrollTop: boolean;
  scrollDirection: DirectionType;
}

const setBackgroundColor = (theme: any, isScrollTop: boolean, isDark: boolean) => {
  if (isScrollTop) {
    return "transparent";
  }
  return theme.backgroundColor[isDark ? "black" : "white"];
};

const HeaderContainer = styled.div<HeaderContainerProps>`
  width: 100vw;
  background-color: ${({ theme, isScrollTop, isDark }) => setBackgroundColor(theme, isScrollTop, isDark)};
  box-shadow: ${({ theme, isScrollTop }) => (isScrollTop ? "none" : theme.backgroundColor["header-box-shadow"])};

  position: fixed;
  top: ${({ scrollDirection, isScrollTop }) => (isScrollTop || scrollDirection === "down" ? 0 : -72)}px;
  z-index: 2;

  display: flex;
  justify-content: center;

  transition: top 0.2s ease-in-out;
`;

const HeaderContent = styled.div`
  padding: 1.25rem 2rem;

  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 1158px;
`;

const HeaderRightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LinkWrapper = styled(Link)`
  padding: 0 16px;
  color: ${({ theme, type }) => theme.fontColor[`inactive-${type}`]};
  font-weight: bold;

  &:hover {
    color: ${({ theme, type }) => theme.fontColor[type === "light" ? "black" : "white"]};
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

const Title = styled(Link)`
  color: ${({ theme, type }) => theme.fontColor[`inactive-${type}`]};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;

  &:hover {
    color: ${({ theme, type }) => theme.fontColor[type === "light" ? "black" : "white"]};
  }
`;

export default Header;

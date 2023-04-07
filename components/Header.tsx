import { useTheme } from "next-themes";
import Link from "next/link";
import styled from "styled-components";
import DarkModeToggleButton from "./DarkModeToggleButton";
import useScrollDirection, { DirectionType } from "@/hooks/useScrollDirection";
import useScrollTop from "@/hooks/useScrollTop";
import MenuToggleButton from "./MenuToggleButton";
import { useState } from "react";

const Header = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollDirection = useScrollDirection();
  const isScrollTop = useScrollTop();

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <HeaderContainer isDark={isDark} isScrollTop={isScrollTop} scrollDirection={scrollDirection}>
      <HeaderContent>
        <Title href="/" isDark={isDark}>
          nno3onn&#39;s Portfolio
        </Title>
        <HeaderRightContainer>
          <LinkWrapper href="#about" isDark={isDark}>
            About me
          </LinkWrapper>
          <LinkWrapper href="#skills" isDark={isDark}>
            Skills
          </LinkWrapper>
          <LinkWrapper href="#archiving" isDark={isDark}>
            Archiving
          </LinkWrapper>
          <LinkWrapper href="#projects" isDark={isDark}>
            Projects
          </LinkWrapper>
          <LinkWrapper href="#career" isDark={isDark}>
            Career
          </LinkWrapper>
          <DarkModeToggleButton />
          <MenuToggleButton setOpenMenu={setOpenMenu} isDark={isDark} />
        </HeaderRightContainer>
      </HeaderContent>
      <HeaderMenu openMenu={openMenu} isDark={isDark}>
        <Link href="">About me</Link>
        <Link href="">Skills</Link>
        <Link href="">Archiving</Link>
        <Link href="">Projects</Link>
        <Link href="">Career</Link>
      </HeaderMenu>
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
  top: ${({ scrollDirection, isScrollTop }) => (isScrollTop || scrollDirection === "down" ? 0 : -81)}px;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: top 0.2s ease-in-out;

  @media (max-width: 992px) {
    top: 0;
    background-color: ${({ theme, isDark }) => theme.backgroundColor[isDark ? "black" : "white"]};
    box-shadow: ${({ theme }) => theme.backgroundColor["header-box-shadow"]};
  }
`;

const HeaderContent = styled.div`
  padding: 1.25rem 2rem;

  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 1158px;
`;

const HeaderMenu = styled.div<{ openMenu: boolean; isDark: boolean }>`
  display: ${({ openMenu }) => (openMenu ? "flex" : "none")};
  flex-direction: column;
  gap: 28px;

  padding: 16px 0 32px 32px;
  color: ${({ theme, isDark }) => theme.fontColor[isDark ? "grey2" : "grey1"]};
  font-weight: bold;

  transition: all 0.2 ease-in-out;

  @media (min-width: 992px) {
    display: none;
  }
`;

const Title = styled(Link)<{ isDark: boolean }>`
  color: ${({ theme, isDark }) => theme.fontColor[isDark ? "white" : "black"]};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
`;

const HeaderRightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LinkWrapper = styled(Link)<{ isDark: boolean }>`
  padding: 0 16px;
  color: ${({ theme, isDark }) => theme.fontColor[isDark ? "grey2" : "grey1"]};
  font-weight: bold;

  &:hover {
    color: ${({ theme, isDark }) => theme.fontColor[isDark ? "white" : "black"]};
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export default Header;

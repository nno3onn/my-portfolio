import { useTheme } from "next-themes";
import Link from "next/link";
import styled from "styled-components";
import DarkModeToggleButton from "./DarkModeToggleButton";
import useScrollDirection, { DirectionType } from "@/hooks/useScrollDirection";
import useScrollTop from "@/hooks/useScrollTop";
import MenuToggleButton from "./MenuToggleButton";
import { useState } from "react";
import useDark from "@/hooks/useDark";

interface HeaderProps {
  moveTable: Record<string, any>;
}

const Header = ({ moveTable }: HeaderProps) => {
  const dark = useDark();

  const scrollDirection = useScrollDirection();
  const isScrollTop = useScrollTop();

  const [openMenu, setOpenMenu] = useState(false);

  const scrollToMenu = (type: string) => {
    moveTable[type].onMoveToElement();
  };

  return (
    <HeaderContainer dark={dark} isScrollTop={isScrollTop} scrollDirection={scrollDirection}>
      <HeaderContent>
        <Title href="/" dark={dark}>
          nno3onn&#39;s Portfolio
        </Title>
        <HeaderRightContainer>
          <MoveWrapper dark={dark} onClick={() => scrollToMenu("about")}>
            About me
          </MoveWrapper>
          <MoveWrapper dark={dark} onClick={() => scrollToMenu("skills")}>
            Skills
          </MoveWrapper>
          <MoveWrapper dark={dark} onClick={() => scrollToMenu("archiving")}>
            Archiving
          </MoveWrapper>
          <MoveWrapper dark={dark} onClick={() => scrollToMenu("projects")}>
            Projects
          </MoveWrapper>
          <MoveWrapper dark={dark} onClick={() => scrollToMenu("Education")}>
            Education
          </MoveWrapper>
          <MoveWrapper dark={dark} onClick={() => scrollToMenu("career")}>
            Career
          </MoveWrapper>
          <DarkModeToggleButton />
          <MenuToggleButton setOpenMenu={setOpenMenu} dark={dark} />
        </HeaderRightContainer>
      </HeaderContent>
      <HeaderMenu openMenu={openMenu} dark={dark}>
        <div onClick={() => scrollToMenu("about")}>About me</div>
        <div onClick={() => scrollToMenu("skills")}>Skills</div>
        <div onClick={() => scrollToMenu("archiving")}>Archiving</div>
        <div onClick={() => scrollToMenu("projects")}>Projects</div>
        <div onClick={() => scrollToMenu("education")}>Education</div>
        <div onClick={() => scrollToMenu("career")}>Career</div>
      </HeaderMenu>
    </HeaderContainer>
  );
};

interface HeaderContainerProps {
  dark: boolean;
  isScrollTop: boolean;
  scrollDirection: DirectionType;
}

const setBackgroundColor = (theme: any, isScrollTop: boolean, dark: boolean) => {
  if (isScrollTop) {
    return "transparent";
  }
  return theme.backgroundColor[dark ? "black" : "white"];
};

const HeaderContainer = styled.div<HeaderContainerProps>`
  width: 100vw;
  background-color: ${({ theme, isScrollTop, dark }) => setBackgroundColor(theme, isScrollTop, dark)};
  box-shadow: ${({ theme, isScrollTop }) => (isScrollTop ? "none" : theme.backgroundColor["header-box-shadow"])};

  position: fixed;
  top: ${({ scrollDirection, isScrollTop }) => (isScrollTop || scrollDirection === "down" ? 0 : -81)}px;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: top 0.2s ease-in-out;

  @media (max-width: 992px) {
    top: 0;
    background-color: ${({ theme, dark }) => theme.backgroundColor[dark ? "black" : "white"]};
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

const HeaderMenu = styled.div<{ openMenu: boolean; dark: boolean }>`
  width: 100%;

  display: ${({ openMenu }) => (openMenu ? "flex" : "none")};
  flex-direction: column;
  gap: 28px;

  padding: 16px 0 32px 32px;
  color: ${({ theme, dark }) => theme.fontColor[dark ? "grey2" : "grey1"]};
  font-weight: bold;

  transition: all 0.2 ease-in-out;

  @media (min-width: 992px) {
    display: none;
  }

  div {
    cursor: pointer;
  }
`;

const Title = styled(Link)<{ dark: boolean }>`
  color: ${({ theme, dark }) => theme.fontColor[dark ? "white" : "black"]};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
`;

const HeaderRightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MoveWrapper = styled.div<{ dark: boolean }>`
  padding: 0 16px;
  color: ${({ theme, dark }) => theme.fontColor[dark ? "grey2" : "grey1"]};
  font-weight: bold;

  cursor: pointer;

  &:hover {
    color: ${({ theme, dark }) => theme.fontColor[dark ? "white" : "black"]};
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export default Header;

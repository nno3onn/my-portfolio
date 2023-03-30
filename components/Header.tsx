import { useTheme } from "next-themes";
import Link from "next/link";
import styled from "styled-components";
import DarkModeToggleButton from "./DarkModeToggleButton";

const Header = () => {
  const { theme } = useTheme();

  return (
    <HeaderContainer>
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

const HeaderContainer = styled.div`
  width: 100vw;
  background-color: transparent;

  position: fixed;
  z-index: 2;

  display: flex;
  justify-content: center;
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

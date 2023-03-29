import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>nno3onn&#39;s Portfolio</HeaderLeft>
      <HeaderRight>
        <HeaderRightWrapper>About me</HeaderRightWrapper>
        <HeaderRightWrapper>Skills</HeaderRightWrapper>
        <HeaderRightWrapper>Archiving</HeaderRightWrapper>
        <HeaderRightWrapper>Projects</HeaderRightWrapper>
        <HeaderRightWrapper>Career</HeaderRightWrapper>
      </HeaderRight>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  margin: 0 6.875rem;
  padding: 1.25rem 2rem;

  display: flex;
  justify-content: space-between;
`;

const HeaderLeft = styled.div``;

const HeaderRight = styled.div`
  display: flex;
`;

const HeaderRightWrapper = styled.div`
  padding: 0 16px;

  &:hover {
    color: white;
  }
`;

export default Header;

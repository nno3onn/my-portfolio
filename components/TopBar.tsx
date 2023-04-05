import styled from "styled-components";

const TopBar = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <TopBarContainer onClick={scrollToTop}>
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
      </svg>
    </TopBarContainer>
  );
};

const TopBarContainer = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;

  padding: 4px;

  color: ${({ theme }) => theme.fontColor.grey1};
  border: 3px solid ${({ theme }) => theme.fontColor.grey1};
  background-color: rgba(256, 256, 256, 0.6);
  border-radius: 8px;

  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export default TopBar;

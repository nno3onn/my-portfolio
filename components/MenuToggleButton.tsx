import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface MenuToggleButtonProps {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  isDark: boolean;
}

const MenuToggleButton = ({ setOpenMenu, isDark }: MenuToggleButtonProps) => {
  return (
    <MenuContainer isDark={isDark} onClick={() => setOpenMenu((prev) => !prev)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </MenuContainer>
  );
};

const MenuContainer = styled.div<{ isDark: boolean }>`
  margin-left: 16px;
  color: ${({ theme, isDark }) => theme.backgroundColor[isDark ? "white" : "paragraph"]};

  cursor: pointer;

  &:hover {
    color: ${({ theme, isDark }) => theme.fontColor[`inactive-${isDark ? "dark" : "light"}`]};
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export default MenuToggleButton;

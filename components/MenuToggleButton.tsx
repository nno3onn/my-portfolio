import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface MenuToggleButtonProps {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  dark: boolean;
}

const MenuToggleButton = ({ setOpenMenu, dark }: MenuToggleButtonProps) => {
  return (
    <MenuContainer dark={dark} onClick={() => setOpenMenu((prev) => !prev)}>
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

const MenuContainer = styled.div<{ dark: boolean }>`
  margin-left: 16px;
  color: ${({ theme, dark }) => theme.backgroundColor[dark ? "white" : "paragraph"]};

  cursor: pointer;

  &:hover {
    color: ${({ theme, dark }) => theme.fontColor[`inactive-${dark ? "dark" : "light"}`]};
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export default MenuToggleButton;

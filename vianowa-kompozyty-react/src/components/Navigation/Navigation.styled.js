import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationStyled = styled.nav`
  position: fixed;
  top: 0;
  right: 0; /* Меню изначально спрятано справа */
  height: 100vh;
  width: 80%;
  padding: 50px 20px;
  background: linear-gradient(135deg, #000000, #1e1e1e);
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform: translateX(100%); /* Скрываем меню за экран */
  opacity: 0.95;
  z-index: 100;
  border-left: 2px solid var(--accent);
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.5);

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: translateX(0); /* Показываем меню */
  `}

  @media screen and (min-width: 1200px) {
    position: static;
    height: auto;
    width: 100%;
    background: unset;
    transition: unset;
    transform: unset;
    border-left: unset;
    box-shadow: unset;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 35px;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    gap: 15px;
    justify-content: end;
    align-items: center;

    font-size: 15px;
  }
`;

export const NavigationItem = styled.li``;

export const NavigationItemLink = styled(NavLink)`
  padding: 15px;
  background: transparent;
  border-radius: 8px;

  font-size: clamp(0.875rem, 0.602rem + 1.36vw, 1.625rem);
  font-weight: 700;
  letter-spacing: 0.25em;
  color: var(--accent);
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;

  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: var(--accent);
    color: #ffffff;
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(255, 140, 0, 0.5);
  }

  &:active {
    transform: scale(1.05);
    background-color: var(--accent);
  }

  &.active {
    background-color: var(--accent);
    color: #ffffff;
    box-shadow: 0 4px 15px rgba(255, 140, 0, 0.5);
  }

  @media screen and (min-width: 1200px) {
    font-size: 14px;
    font-weight: 900;
    padding: 5px;
  }
`;

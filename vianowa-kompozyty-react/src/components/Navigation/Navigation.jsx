import { navListArr } from "../../data/data";
import { BurgerButtonClose } from "../BurgerButtonClose/BurgerButtonClose";
import {
  NavigationItem,
  NavigationItemLink,
  NavigationList,
  NavigationStyled,
} from "./Navigation.styled";

export const Navigation = ({ isOpen, onClick }) => {
  return (
    <NavigationStyled isOpen={isOpen}>
      <NavigationList>
        {navListArr.map((item) => (
          <NavigationItem key={item.name}>
            <NavigationItemLink to={item.path}>{item.name}</NavigationItemLink>
          </NavigationItem>
        ))}
      </NavigationList>
      <BurgerButtonClose onClick={onClick} />
    </NavigationStyled>
  );
};

import { BurgerButtonClose } from "../BurgerButtonClose/BurgerButtonClose";
import {
  NavigationItem,
  NavigationItemLink,
  NavigationList,
  NavigationStyled,
} from "./Navigation.styled";

const navListArr = [
  { name: "STRONA GŁÓWNA", path: "/" },
  { name: "BALIE", path: "/balie" },
  { name: "ZESTAWY", path: "/zestawy" },
  { name: "AKCESORIA", path: "/akcesoria" },
  { name: "WKŁADY", path: "/wklady" },
  { name: "SAUNY", path: "/sauny" },
  { name: "GALERIA", path: "/galeria" },
  { name: "KONTAKT", path: "/kontakt" },
];

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

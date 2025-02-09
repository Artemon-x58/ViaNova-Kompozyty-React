import { FooterItem } from "../FooterItem/FooterItem";
import { FooterListStyled, FooterListTitle } from "./FooterList.styled";

export const FooterList = ({ arr, title }) => {
  return (
    <div>
      <FooterListTitle>{title}</FooterListTitle>
      <FooterListStyled>
        {arr.map(({ name, path }) => (
          <FooterItem key={name} name={name} path={path} />
        ))}
      </FooterListStyled>
    </div>
  );
};

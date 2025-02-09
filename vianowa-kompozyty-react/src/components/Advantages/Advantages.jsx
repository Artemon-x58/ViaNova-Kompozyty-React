import { advantagesArr } from "../../data/data";
import Icon from "../../icons/sprite.svg";
import { Container } from "../Container/Container";
import {
  AdvantagesItem,
  AdvantagesList,
  AdvantagesSubtitle,
  AdvantagesSvg,
  AdvantagesTitle,
} from "./Advantages.styled";

export const Advantages = () => {
  return (
    <Container>
      <h2 className="visually-hidden">Advantages</h2>
      <AdvantagesList>
        {advantagesArr.map((item) => (
          <AdvantagesItem key={item.title}>
            <AdvantagesSvg>
              <use href={`${Icon}#${item.nameSvg}`}></use>
            </AdvantagesSvg>
            <AdvantagesTitle>{item.title}</AdvantagesTitle>
            <AdvantagesSubtitle>{item.text}</AdvantagesSubtitle>
          </AdvantagesItem>
        ))}
      </AdvantagesList>
    </Container>
  );
};

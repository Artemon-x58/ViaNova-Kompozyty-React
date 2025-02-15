import { Container } from "../Container/Container";
import { PagesTitleAndSubtitle } from "../PagesTitleAndSubtitle/PagesTitleAndSubtitle";
import { Section } from "../Section/Section";
import Img from "../../img/sold-out.png";
import { SaunasImg } from "./Saunas.styled";

export const Saunas = () => {
  return (
    <Section>
      <Container>
        <PagesTitleAndSubtitle
          title={"Sauny"}
          subtitle={
            "Na chwilę obecną sauny są niedostępne. Prosimy o powrót później."
          }
        />
        <SaunasImg src={Img} alt="Sold out" />
      </Container>
    </Section>
  );
};

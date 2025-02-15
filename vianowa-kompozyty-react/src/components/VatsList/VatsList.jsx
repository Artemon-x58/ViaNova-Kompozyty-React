import { Section } from "../Section/Section";
import { Container } from "../Container/Container";
import { PagesTitleAndSubtitle } from "../PagesTitleAndSubtitle/PagesTitleAndSubtitle";
import { VatsListStyled } from "./VatsList.styled";
import { VatsItem } from "../VatsItem/VatsItem";
import { vatsInfoArr } from "../../data/data";

export const VatsList = () => {
  return (
    <Section>
      <Container>
        <PagesTitleAndSubtitle
          title={"Balie"}
          subtitle={"Produkcja balii ogrodowych"}
        />
        <VatsListStyled>
          {vatsInfoArr.map((item, index) => (
            <VatsItem key={index} {...item} />
          ))}
        </VatsListStyled>
      </Container>
    </Section>
  );
};

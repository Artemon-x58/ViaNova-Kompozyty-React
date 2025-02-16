import { useParams } from "react-router-dom";
import { vatsInfoArr } from "../../data/data";
import { Slider } from "../Slider/Slider";
import { Section } from "../Section/Section";
import { Container } from "../Container/Container";
import { PagesTitleAndSubtitle } from "../PagesTitleAndSubtitle/PagesTitleAndSubtitle";
import {
  DefiniteVatDescription,
  DefiniteVatWrapper,
} from "./DefiniteVat.styled";

export const DefiniteVat = () => {
  const { id } = useParams();

  const vat = vatsInfoArr.find((item) => item.id === id);

  return (
    <Section>
      <Container>
        <PagesTitleAndSubtitle title={vat.name} subtitle={vat.minPrice} />
        <DefiniteVatWrapper>
          <Slider />
          <DefiniteVatDescription>{vat.about}</DefiniteVatDescription>
        </DefiniteVatWrapper>
      </Container>
    </Section>
  );
};

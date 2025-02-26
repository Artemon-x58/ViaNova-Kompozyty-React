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
import { OptionsList } from "../OptionsList/OptionsList";

export const DefiniteVat = () => {
  const { id } = useParams();

  const vat = vatsInfoArr.find((item) => item.id === id);

  return (
    <Section>
      <Container>
        <PagesTitleAndSubtitle title={vat.name} subtitle={""} />
        <DefiniteVatWrapper>
          <Slider />
          <DefiniteVatDescription>{vat.about}</DefiniteVatDescription>
        </DefiniteVatWrapper>
        <OptionsList minPrice={vat.minPrice} />
      </Container>
    </Section>
  );
};

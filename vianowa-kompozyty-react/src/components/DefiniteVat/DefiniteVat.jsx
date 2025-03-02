import { useParams } from "react-router-dom";
import { vatsInfoArr } from "../../data/data";
import { Slider } from "../Slider/Slider";
import { Section } from "../Section/Section";
import { Container } from "../Container/Container";
import { PagesTitleAndSubtitle } from "../PagesTitleAndSubtitle/PagesTitleAndSubtitle";
import {
  DefiniteVatAdd,
  DefiniteVatDescription,
  DefiniteVatRemove,
  DefiniteVatWrapper,
  DefiniteVatWrapperBtn,
} from "./DefiniteVat.styled";
import { OptionsList } from "../OptionsList/OptionsList";
import { OptionsListDisabled } from "../OptionsListDisabled/OptionsListDisabled";
import { useDispatch, useSelector } from "react-redux";
import { selectVat } from "../../redux/vats/vatsSelectors";
import { addVat, removeVat } from "../../redux/vats/vatsSlice";

export const DefiniteVat = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const vat = vatsInfoArr.find((item) => item.id === id);
  const isSelected = useSelector(selectVat).some((item) => item.id === id);

  const toggleVat = () => dispatch(isSelected ? removeVat(id) : addVat(vat));

  return (
    <Section>
      <Container>
        <PagesTitleAndSubtitle title={vat.name} subtitle="" />
        <DefiniteVatWrapper>
          <Slider />
          <DefiniteVatWrapperBtn>
            <DefiniteVatDescription>{vat.about}</DefiniteVatDescription>
            {isSelected ? (
              <DefiniteVatRemove onClick={toggleVat}>
                Usuń z kosza
              </DefiniteVatRemove>
            ) : (
              <DefiniteVatAdd onClick={toggleVat}>
                Dodaj do koszyka
              </DefiniteVatAdd>
            )}
          </DefiniteVatWrapperBtn>
        </DefiniteVatWrapper>
        {isSelected ? <OptionsList /> : <OptionsListDisabled />}
      </Container>
    </Section>
  );
};

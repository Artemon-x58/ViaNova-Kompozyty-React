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
import { useDispatch, useSelector } from "react-redux";
import { selectVat } from "../../redux/vats/vatsSelectors";
import { addVat, removeVat } from "../../redux/vats/vatsSlice";

export const DefiniteVat = () => {
  const dispatch = useDispatch();
  const selectedVat = useSelector(selectVat);
  const { id } = useParams();

  const vat = vatsInfoArr.find((item) => item.id === id);
  const isSelected = selectedVat.some((item) => item.id === id);

  const handleClick = () => dispatch(isSelected ? removeVat(id) : addVat(vat));

  return (
    <Section>
      <Container>
        <PagesTitleAndSubtitle title={vat.name} subtitle={""} />
        <DefiniteVatWrapper>
          <Slider />
          <DefiniteVatWrapperBtn>
            <DefiniteVatDescription>{vat.about}</DefiniteVatDescription>
            {!isSelected ? (
              <DefiniteVatAdd type="button" onClick={handleClick}>
                Dodaj do koszyka
              </DefiniteVatAdd>
            ) : (
              <DefiniteVatRemove type="button" onClick={handleClick}>
                Usuń z kosza
              </DefiniteVatRemove>
            )}
          </DefiniteVatWrapperBtn>
        </DefiniteVatWrapper>

        <OptionsList minPrice={vat.minPrice} />
      </Container>
    </Section>
  );
};

import { vatOptions } from "../../data/data";
import { OptionsItem } from "../OptionsItem/OptionsItem";
import { OptionsItemTitle } from "../OptionsList/OptionsList.styled";
import { OptionsListStyled, OptionsListSum } from "./OptionsList.styled";
import { useSelector } from "react-redux";
import { selectVat } from "../../redux/vats/vatsSelectors";
import { useParams } from "react-router-dom";

export const OptionsList = () => {
  const { id } = useParams();

  const { price } = useSelector(selectVat).find((item) => item.id === id);

  return (
    <OptionsListStyled>
      <>
        <OptionsItemTitle>Opcje</OptionsItemTitle>
        {vatOptions.map(({ id, name, price }) => (
          <OptionsItem key={id} id={id} name={name} price={price} />
        ))}
        <OptionsListSum>Razem: {price} zł</OptionsListSum>
      </>
    </OptionsListStyled>
  );
};

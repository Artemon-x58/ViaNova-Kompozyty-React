import { useState, useEffect } from "react";
import { vatOptions } from "../../data/data";
import { OptionsItem } from "../OptionsItem/OptionsItem";
import { OptionsItemTitle } from "../OptionsList/OptionsList.styled";
import { OptionsListStyled, OptionsListSum } from "./OptionsList.styled";
import PropTypes from "prop-types";

export const OptionsList = ({ minPrice }) => {
  const [sum, setSum] = useState(minPrice);
  const [selectedPrices, setSelectedPrices] = useState([]);

  const handleSelect = (price, isSelected) => {
    setSelectedPrices((prevSelectedPrices) => {
      const updatedPrices = isSelected
        ? [...prevSelectedPrices, price] // Добавляем цену, если выбран
        : prevSelectedPrices.filter((p) => p !== price); // Убираем, если снят
      return updatedPrices;
    });
  };

  // Обновляем сумму, когда изменяется список выбранных цен
  useEffect(() => {
    setSum(selectedPrices.reduce((total, price) => total + price, minPrice)); // Считаем сумму
  }, [selectedPrices, minPrice]);

  return (
    <OptionsListStyled>
      <OptionsItemTitle>Opcje</OptionsItemTitle>
      {vatOptions.map(({ id, name, price }) => (
        <OptionsItem
          key={id}
          name={name}
          price={price}
          onSelect={handleSelect}
        />
      ))}
      <OptionsListSum>Razem: {sum} zł</OptionsListSum>
    </OptionsListStyled>
  );
};

OptionsList.propTypes = {
  minPrice: PropTypes.number.isRequired,
};

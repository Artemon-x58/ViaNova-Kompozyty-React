import { AccessoriesListStyled } from "./AccessoriesList.styled";
import { PagesTitleAndSubtitle } from "../PagesTitleAndSubtitle/PagesTitleAndSubtitle";
import { accessories } from "../../data/data";
import { AccessoriesItem } from "../AccessoriesItem/AccessoriesItem";

export const AccessoriesList = () => {
  return (
    <>
      <PagesTitleAndSubtitle title={"akcesoria"} subtitle={""} />
      <AccessoriesListStyled>
        {accessories.map((item) => (
          <AccessoriesItem key={item.id} {...item} />
        ))}
      </AccessoriesListStyled>
    </>
  );
};

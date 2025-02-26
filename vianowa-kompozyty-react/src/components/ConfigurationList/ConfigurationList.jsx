import { inserts } from "../../data/data";
import { ConfigurationItem } from "../ConfigurationItem/ConfigurationItem";

import { PagesTitleAndSubtitle } from "../PagesTitleAndSubtitle/PagesTitleAndSubtitle";
import { ConfigurationListStyled } from "./ConfigurationList.styled";

export const ConfigurationList = () => {
  return (
    <>
      <PagesTitleAndSubtitle
        title={"Konfiguracja"}
        subtitle={"Zrób swoją konfigurację"}
      />
      <ConfigurationListStyled>
        {inserts.map((item) => (
          <ConfigurationItem key={item.id} {...item} />
        ))}
      </ConfigurationListStyled>
    </>
  );
};

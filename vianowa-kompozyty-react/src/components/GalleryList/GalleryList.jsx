import { Section } from "../Section/Section";
import { Container } from "../Container/Container";
import { GalleryItem } from "../GalleryItem/GalleryItem";
import { GalleryListStyled } from "./GalleryList.styled";
import { PagesTitleAndSubtitle } from "../PagesTitleAndSubtitle/PagesTitleAndSubtitle";
import { vatsInfoArr } from "../../data/data";

export const GalleryList = () => {
  return (
    <Section>
      <Container>
        <PagesTitleAndSubtitle
          title={"Galeria"}
          subtitle={"Nasze realizacje"}
        />

        <GalleryListStyled>
          {vatsInfoArr.map((item, index) => (
            <GalleryItem
              key={index}
              src={item.imgPath}
              alt={`Image ${index + 1}`}
            />
          ))}
        </GalleryListStyled>
      </Container>
    </Section>
  );
};

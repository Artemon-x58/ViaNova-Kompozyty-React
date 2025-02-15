import { Section } from "../Section/Section";
import { Container } from "../Container/Container";
import { GalleryItem } from "../GalleryItem/GalleryItem";
import {
  GalleryListStyled,
  GallerySubtitle,
  GalleryTitle,
} from "./GalleryList.styled";

const arr = [
  { path: "/img/balie/balia-1.jpg" },
  { path: "/img/balie/balia-2.jpg" },
  { path: "/img/balie/balia-3.webp" },
  { path: "/img/balie/balia-4.jpg" },
  { path: "/img/balie/balia-5.jpg" },
  { path: "/img/balie/balia-6.jpg" },
  { path: "/img/balie/balia-7.jpg" },
  { path: "/img/balie/balia-8.webp" },
  { path: "/img/balie/balia-9.jpg" },
  { path: "/img/balie/balia-10.webp" },
];

export const GalleryList = () => {
  return (
    <Section>
      <Container>
        <GalleryTitle>Galeria</GalleryTitle>
        <GallerySubtitle>Nasze realizacje</GallerySubtitle>
        <GalleryListStyled>
          {arr.map((item, index) => (
            <GalleryItem
              key={index}
              src={item.path}
              alt={`Image ${index + 1}`}
            />
          ))}
        </GalleryListStyled>
      </Container>
    </Section>
  );
};

import Img from "../../img/about-products.jpg";
import { Container } from "../Container/Container";
import {
  AboutProductsImg,
  AboutProductsSubtitle,
  AboutProductsTitle,
  AboutProductsWrapper,
} from "./AboutProducts.styled";

export const AboutProducts = () => {
  return (
    <Container>
      <AboutProductsWrapper>
        <AboutProductsImg src={Img} alt="Balia ogrodowa" />
        <div>
          <AboutProductsTitle>Balia ogrodowa</AboutProductsTitle>
          <AboutProductsSubtitle>
            Balia ogrodowa to nowoczesne rozwiązanie dla osób ceniących relaks w
            otoczeniu natury. Wykonana z włókna szklanego, jest trwała,
            higieniczna i odporna na warunki atmosferyczne. Zewnętrzna obudowa
            może być z drewna lub kompozytu, pasując do różnych stylów
            aranżacji. Wypełniona gorącą wodą, balia jest idealna do relaksu
            przez cały rok – latem na świeżym powietrzu, zimą w mroźnym
            krajobrazie. Wyposażona w piec opalany drewnem lub nowoczesny system
            podgrzewania, zapewnia komfort użytkowania. To stylowy element
            ogrodu, który tworzy oazę spokoju i relaksu.
          </AboutProductsSubtitle>
        </div>
      </AboutProductsWrapper>
    </Container>
  );
};

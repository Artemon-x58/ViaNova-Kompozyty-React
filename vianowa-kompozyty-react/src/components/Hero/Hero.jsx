import { Container } from "../Container/Container";
import { HeroText } from "./Hero.styled";

export const Hero = () => {
  return (
    <Container>
      <h1 className="visually-hidden">O nas</h1>
      <HeroText>
        ViaNova Kompozyty to polski producent balii ogrodowych, który pomoże Ci
        stworzyć miejsce idealne do relaksu i odpoczynku. Nasze balie wyróżniają
        się wyjątkowym designem, solidnym wykonaniem oraz dbałością o każdy
        szczegół, co czyni je doskonałym wyborem dla Twojego ogrodu. Zapewniamy
        pełne wsparcie na każdym etapie realizacji – od pomocy w wyborze
        idealnego modelu, przez szybką dostawę, aż po profesjonalny montaż.
        Łączymy nowoczesne technologie z estetyką, by nasze produkty były nie
        tylko funkcjonalne, ale i piękne. Zaufaj ViaNova Kompozyty i zamień swój
        ogród w przestrzeń pełną harmonii i komfortu. Skontaktuj się z nami już
        dziś, by rozpocząć swoją przygodę z wyjątkowym relaksem!
      </HeroText>
    </Container>
  );
};

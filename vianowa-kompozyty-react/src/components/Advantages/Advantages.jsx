import Icon from "../../icons/sprite.svg";
import { Container } from "../Container/Container";
import {
  AdvantagesItem,
  AdvantagesList,
  AdvantagesSubtitle,
  AdvantagesSvg,
  AdvantagesTitle,
} from "./Advantages.styled";

const advantagesArr = [
  {
    nameSvg: "icon-medal",
    title: "Jakość produkcji",
    text: `Stawiamy na najwyższą jakość w każdym etapie produkcji. Nasze
                balie tworzone są z dbałością o najmniejsze detale, przy użyciu
                starannie wyselekcjonowanych materiałów i nowoczesnych
                technologii. Każdy produkt przechodzi rygorystyczną kontrolę,
                aby zapewnić niezawodność, trwałość i estetykę, która spełni
                oczekiwania nawet najbardziej wymagających klientów. Łączymy
                precyzyjne rzemiosło z innowacyjnymi rozwiązaniami, tworząc
                balie, które zachwycają swoim wykonaniem i funkcjonalnością.
                Nasza jakość to gwarancja Twojego zadowolenia!`,
  },
  {
    nameSvg: "icon-profile",
    title: "Indywidualne podejście",
    text: `Twoja wizja jest dla nas najważniejsza. Każda balia, którą
                tworzymy, jest wyjątkowa i w pełni dostosowana do Twoich
                oczekiwań. Uwzględniamy wszystkie szczegóły – od designu i
                rozwiązań technicznych, po indywidualne detale, które uczynią
                produkt idealnym dla Ciebie. Dzięki elastycznemu podejściu i
                pełnemu zaangażowaniu realizujemy projekty, które odpowiadają na
                potrzeby nawet najbardziej wymagających klientów. Każda balia
                powstaje z myślą o Tobie, aby zapewnić Ci maksymalny komfort i
                satysfakcję. Twój pomysł, nasza realizacja – razem stworzymy coś
                wyjątkowego!`,
  },
  {
    nameSvg: "icon-happy",
    title: "Zadowoleni klienci",
    text: `Nasi klienci często podkreślają w swoich opiniach wyjątkową
                jakość naszej balii oraz jej unikalny design. Szczególnie
                doceniają możliwość wyboru kolorystyki wnętrza, wygodę
                użytkowania i staranność wykonania. Dla nas najważniejsze jest,
                że są zadowoleni i chętnie dzielą się swoimi pozytywnymi
                doświadczeniami, polecając naszą produkcję rodzinie i znajomym.
                Utrzymujemy kontakt z naszymi klientami również po zakupie,
                zapewniając wsparcie i serwis. Ich zadowolenie i rekomendacje to
                dla nas najlepsze potwierdzenie, że tworzymy produkty, które
                spełniają oczekiwania i przynoszą radość na lata. Dziękujemy za
                zaufanie!`,
  },
  {
    nameSvg: "icon-wrench",
    title: "Gwarancja i serwis",
    text: `Dbamy o Twoje zadowolenie i spokojne użytkowanie naszej balii.
                Oferujemy solidną gwarancję, która obejmuje zarówno trwałość
                wykonania, jak i niezawodność zastosowanych rozwiązań. W
                przypadku jakichkolwiek pytań czy potrzeby wsparcia nasz zespół
                serwisowy jest zawsze do Twojej dyspozycji. Zapewniamy
                profesjonalną pomoc, szybką reakcję i najwyższy standard
                obsługi. Z nami możesz mieć pewność, że Twoja balia posłuży Ci
                przez lata, a każdy problem zostanie rozwiązany sprawnie i
                skutecznie. Twoje zaufanie to dla nas priorytet!`,
  },
];

export const Advantages = () => {
  return (
    <Container>
      <h2 className="visually-hidden">Advantages</h2>
      <AdvantagesList>
        {advantagesArr.map((item) => (
          <AdvantagesItem key={item.title}>
            <AdvantagesSvg>
              <use href={`${Icon}#${item.nameSvg}`}></use>
            </AdvantagesSvg>
            <AdvantagesTitle>{item.title}</AdvantagesTitle>
            <AdvantagesSubtitle>{item.text}</AdvantagesSubtitle>
          </AdvantagesItem>
        ))}
      </AdvantagesList>
    </Container>
  );
};

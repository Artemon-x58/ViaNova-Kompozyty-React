import { Container } from "../components/Container/Container";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Location } from "../components/Location/Location";
import { Section } from "../components/Section/Section";

export const ContactPage = () => {
  return (
    <>
      <Header />
      <main>
        <Section>
          <Container>
            <Location />
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
};

import { ConfigurationList } from "../components/ConfigurationList/ConfigurationList";
import { Container } from "../components/Container/Container";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Section } from "../components/Section/Section";

export const ConfigurationPage = () => {
  return (
    <>
      <Header />
      <main>
        <Section>
          <Container>
            <ConfigurationList />
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
};

import { Container } from "../components/Container/Container";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Section } from "../components/Section/Section";

export const InsertPage = () => {
  return (
    <>
      <Header />
      <main>
        <Section>
          <Container></Container>
        </Section>
      </main>
      <Footer />
    </>
  );
};

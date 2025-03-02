import { Container } from "../components/Container/Container";

import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Insert } from "../components/Insert/Insert";
import { Section } from "../components/Section/Section";

export const InsertPage = () => {
  return (
    <>
      <Header />
      <main>
        <Section>
          <Container>
            <Insert />
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
};

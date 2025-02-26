import { AccessoriesList } from "../components/AccessoriesList/AccessoriesList";
import { Container } from "../components/Container/Container";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Section } from "../components/Section/Section";

export const AccessoriesPage = () => {
  return (
    <>
      <Header />
      <main>
        <Section>
          <Container>
            <AccessoriesList />
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
};

import { AboutProducts } from "../AboutProducts/AboutProducts";
import { Hero } from "../Hero/Hero";
import { Section } from "../Section/Section";

export const Main = () => {
  return (
    <main>
      <Section>
        <Hero />
      </Section>
      <Section>
        <AboutProducts />
      </Section>
      <Section></Section>
      <Section></Section>
    </main>
  );
};

import { AboutProducts } from "../AboutProducts/AboutProducts";
import { Advantages } from "../Advantages/Advantages";
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
      <Section>
        <Advantages />
      </Section>
      <Section></Section>
    </main>
  );
};

import { AboutProducts } from "../AboutProducts/AboutProducts";
import { Advantages } from "../Advantages/Advantages";
import { Hero } from "../Hero/Hero";
import { Location } from "../Location/Location";
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
      <Section>
        <Location />
      </Section>
    </main>
  );
};

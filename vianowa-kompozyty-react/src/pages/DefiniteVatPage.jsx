import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { DefiniteVat } from "../components/DefiniteVat/DefiniteVat";

export const DefiniteVatPage = () => {
  return (
    <>
      <Header />
      <main>
        <DefiniteVat />
      </main>
      <Footer />
    </>
  );
};

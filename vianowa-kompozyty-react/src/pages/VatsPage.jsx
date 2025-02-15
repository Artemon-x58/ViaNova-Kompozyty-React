import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { VatsList } from "../components/VatsList/VatsList";

export const VatsPage = () => {
  return (
    <>
      <Header />
      <main>
        <VatsList />
      </main>
      <Footer />
    </>
  );
};

import { Footer } from "../components/Footer/Footer";
import { GalleryList } from "../components/GalleryList/GalleryList";
import { Header } from "../components/Header/Header";

export const GalleryPage = () => {
  return (
    <>
      <Header />
      <main>
        <GalleryList />
      </main>
      <Footer />
    </>
  );
};

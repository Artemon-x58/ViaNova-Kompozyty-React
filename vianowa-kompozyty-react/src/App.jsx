import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { GalleryPage } from "./pages/GalleryPage";
import { ContactPage } from "./pages/ContactPage";
import { SaunasPage } from "./pages/SaunasPage";
import { VatsPage } from "./pages/VatsPage";
import { DefiniteVatPage } from "./pages/DefiniteVatPage";
import { AccessoriesPage } from "./pages/AccessoriesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/balie" element={<VatsPage />} />
        <Route path="balie/:id" element={<DefiniteVatPage />} />
        <Route path="akcesoria" element={<AccessoriesPage />} />
        <Route path="/sauny" element={<SaunasPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/kontakt" element={<ContactPage />} />

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;

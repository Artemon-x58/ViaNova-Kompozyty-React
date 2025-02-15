import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { GalleryPage } from "./pages/GalleryPage";
import { ContactPage } from "./pages/ContactPage";
import { SaunasPage } from "./pages/SaunasPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/sauny" element={<SaunasPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;

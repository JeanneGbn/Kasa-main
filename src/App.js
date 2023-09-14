import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import D404 from './pages/D404';
import FicheLogement from './pages/FicheLogement';
import Apropos from "./pages/DApropos";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<D404 />}/>
        <Route path="/D404" element={<D404 />}/>
        <Route path="/D_Fiche-Logement/:id" element={<FicheLogement />} />
        <Route path="/DApropos" element={<Apropos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



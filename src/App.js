import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import D404 from './pages/D404';
import FicheLogement from './pages/FicheLogement'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/D404" element={<D404 />}/>
        <Route path="/D_Fiche-Logement/:id" element={<FicheLogement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



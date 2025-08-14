import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layer from '../component/layer.jsx';
import Accueil from '../page/accueil.jsx';
import Propos from '../page/propos.jsx';
import Maison from '../page/maison.jsx';
import Nontrouve from '../page/nontrouve.jsx';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layer />}>
          <Route path="/" element={<Accueil />} />
          <Route path="/propos" element={<Propos />} />
          <Route path="/maison/:id" element={<Maison />} />
          <Route path="*" element={<Nontrouve />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
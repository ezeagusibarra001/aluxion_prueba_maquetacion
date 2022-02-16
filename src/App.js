import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";

import { UsuarioProvider } from "./context/useContext";
function App() {
  return (
    <UsuarioProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </UsuarioProvider>
  );
}

export default App;

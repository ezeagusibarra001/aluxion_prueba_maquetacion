import "./App.css";
import { HomeProvider } from "./context/useContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
function App() {
  return (
    <HomeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />

        </Routes>
      </BrowserRouter>
    </HomeProvider>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";
import About from "./Pages/About";
import Alerts from "./components/Banner/Alerts";
import CryptoNews from "./Pages/News";

function App() {
  return (
    <div className="app">
      <Header />
      <Alerts />
      <Routes>
        <Route exact path="/" element={<Homepage />} />

        <Route path="/coins/:id" element={<CoinPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<CryptoNews />} />
      </Routes>
    </div>
  );
}

export default App;

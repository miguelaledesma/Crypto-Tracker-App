import { BrowserRouter, Route } from "react-router-dom"
import Header from "./components/Header";
import './App.css';
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header /> 
      <Route  path= '/' component ={Homepage} /> 
      <Route  path= '/coins/:id' component ={CoinPage} /> 
      Hello 
    </div>
    </BrowserRouter>

  );
}

export default App;

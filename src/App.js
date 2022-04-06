import { Route, Routes } from "react-router-dom"
import Header from "./components/Header";
import './App.css';
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";


function App() {

  

  return (
   
    <div className = 'app' >
      <Header /> 
      
      
      <Routes>

      <Route  exact path= '/' element = { <Homepage/>}/> 
      
     
      
      <Route  path= '/coins/:id' element = { <CoinPage />} />
      
       
       </Routes>
    </div>
   

  );
}

export default App;

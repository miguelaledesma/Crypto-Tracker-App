import { Route, Routes } from "react-router-dom"
import Header from "./components/Header";
import './App.css';
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";


function App() {

  

  return (
   
    <div className = 'app' >
      <Header /> 
      <CoinPage /> 
      <Homepage/>
      <Routes>

      <Route  exact path= '/'> 
      
      </Route>
      
      <Route  path= '/coins/:id' >
        
        </Route> 
       
       </Routes>
    </div>
   

  );
}

export default App;

import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Homm from "./components/Homm"
import AddEdit from "./components/AddEdit"
import Delete from './components/Delete';


function App() {  
  return (
    <div className="App">
      <ToastContainer position='top-center'></ToastContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Homm></Homm>}></Route>
         <Route path="/addedit" element={<AddEdit></AddEdit>}/>
         <Route path="/delete/" element={<Delete></Delete>}></Route>
        </Routes>
      </Router>
      
    
    </div>
  );
}

export default App;

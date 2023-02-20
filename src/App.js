import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AllPersoList from './pages/AllPersoList';
import Contact from './pages/Contact';
import Home  from "./pages/Home";

const App = () => {
  return (
    /**
     * Création du routeur
     * path = l'url de notre page
     * element = le composant ou page que l'on veut chercher
     */
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/allperso' element={<AllPersoList/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

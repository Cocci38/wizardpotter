import { React } from "react";
import Homing from "../components/Homing";
import Navbar from "../components/Navbar";
import Wizard from '../components/Wizard';
import Spells from '../components/Spells';
import Footer from '../components/Footer';

const Home = () => {
    return(
        <div>
            <Navbar/>
            <Homing/>
            <Wizard/>
            <Spells/>
            <Footer/>
        </div>
    )
}

export default Home;
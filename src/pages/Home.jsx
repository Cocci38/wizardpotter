import { React } from "react";
import Homing from "../components/Homing";
import Navbar from "../components/Navbar";
import Wizard from '../components/Wizard';
import Spells from '../components/Spells';

const Home = () => {
    return(
        <div>
            <Navbar/>
            <Homing/>
            <Wizard/>
            <Spells/>
        </div>
    )
}

export default Home;
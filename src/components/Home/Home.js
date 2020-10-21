import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Recognition from '../Recognition/Recognition';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import Something from '../Something/Something';
import Team from '../Team/Team';


const Home = () => {
    return (
        <div>
           
            <Slider/>
            <About/>
            <Team/>
            <Recognition/>
            <Services/>
            <Something/>
            <Contact/>
               
        </div>
    );
};

export default Home;
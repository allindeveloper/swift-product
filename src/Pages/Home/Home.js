import React from 'react';
import Header from '../../components/Header/Header';
import SpaceTop from "../../components/Space/SpaceTop";
import About from '../../components/UI/About';

const Home = () =>{


    return (
        <>
        <div id="documentation">
           <Header/>


            <SpaceTop length={20}/>
           {/* About */}
           <About />
           </div>
        </>
    )

}

export default Home;
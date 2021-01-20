import React from 'react';
import Header from '../../components/Header/Header';
import SpaceTop from "../../components/Space/SpaceTop";
import About from '../../components/UI/About';
import ApiService from '../../components/UI/ApiService';
import Footer from '../../components/UI/Footer';
import Partners from '../../components/UI/Partners';
import Services from '../../components/UI/Services';

const Home = () =>{


    return (
        <>
        <div id="home">
           <Header/>


            <SpaceTop length={20}/>
           {/* About */}
           <About />
           <SpaceTop length={30}/>

            <Partners/>
            <SpaceTop length={60}/>
           
           {/* Api Service */}

           <ApiService/>
          
          <Services/>
           <Footer/>
           </div>
        </>
    )

}

export default Home;
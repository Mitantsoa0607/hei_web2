// import {useState} from 'react';
import Header from "../components/layout/Header";
import "./Home.css"
import img1 from '../components/pics/pexels-fotoaibe-1571468.jpg';
import img2 from '../components/pics/pexels-fotoaibe-1668860.jpg';
import img3 from '../components/pics/pexels-john-tekeridis-21837-1428348.jpg';
import img4 from '../components/pics/pexels-pixabay-271624.jpg';
import img5 from '../components/pics/pexels-pixabay-275484.jpg';
import img6 from '../components/pics/pexels-zvolskiy-2082087.jpg';
import Footer from "../components/layout/Footer";
import SearchBar from "../components/layout/SearchBar";
const Home = () => {
    return (
      <>
      <center><Header/></center>
      <center style={{marginTop : "100px"}}><SearchBar/></center>
      <center><div id="aparts">
        <div id="apart1">
            <div id="apart1.1">
                <img src={img1} alt="" width={"300px"}/>
                <div >
                    <p >Toulouse, France</p>
                    <p>725$</p>
                </div>
                    <button id="but">Réserver</button>
                </div>
            <div id="apart1.2">
                <img src={img2} alt="" width={"300px"}/>
                <div >
                    <p>Paris, France</p>
                    <p>800$</p>
                </div>
                <button id="but">Réserver</button>
            </div>
            <div id="apart1.3">
                <img src={img3} alt="" width={"300px"}/>
                <div>
                    <p>Amiens, France</p>
                    <p>900$</p>
                </div>
                <button id="but">Réserver</button>
            </div>
        </div>
        <div id="apart2">
            <div id="apart2.1">
                <img src={img4} alt="" width={"300px"}/>
                <div>
                    <p>Marseille, France</p>
                    <p>600$</p>
                </div>
                <button id="but">Réserver</button>
            </div>
            <div id="apart2.2">
                <img src={img5} alt="" width={"300px"}/>
                <div>
                    <p>Bordeaux, France</p>
                    <p>854$</p>
                </div>
                <button id="but">Réserver</button>
            </div>
            <div id="apart2.3">
                <img src={img6} alt="" width={"300px"}/>
                <div>
                    <p>Nantes, France</p>
                    <p>762$</p>
                </div>
                <button id="but">Réserver</button>
            </div>
        </div>
    </div>
    </center>
    <Footer/>
      </>
    );
  }
export default Home;

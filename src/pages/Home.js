import react from "react";
import Hero from "../components/Hero";
import "../styles/Home.css";
import CardList from "../components/CardList";
import { hotDropsData } from "../constants/MockupData";
import Header from "../components/Header";



const Home = () => {


  return (
    <div id="home">
      <Header />

      <div id="upcoming"><p id="card-list-header-text"> Upcoming DROPS</p></div>
      <div id="list-container">
        <CardList list={hotDropsData} />
      </div>
    </div>
  );
};

export default Home;

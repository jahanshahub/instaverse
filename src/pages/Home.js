import react, { useState } from "react";
import Hero from "../components/Hero";
import "../styles/Home.css";
import CollectionList from "../components/CollectionList";
import { collectionsData } from "../constants/Collections";
import Header from "../components/Header";
import Footer from "../components/Footer";



const Home = () => {
  const [trending, setTrending] = useState(true);

  return (
    <div id="home">
      <Header />

      <div id="upcoming"><p id="card-list-header-text"> Upcoming DROPS</p></div>
      <div id="collection-container">
        <div className="btn-group mb-3">
          <button className={`default-button me-5 ${trending===true?'active':''}`} onClick={()=>setTrending(true)}>Trending</button>
          <button className={`default-button ${trending===false?'active':''}`} onClick={()=>setTrending(false)}>Top</button>
        </div>
        <CollectionList list={collectionsData} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;

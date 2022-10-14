import react from "react";
import CardList from "../components/CardList";
import { exploreList } from "../constants/MockupData";
import '../styles/Explore.css';
import Header from "../components/Header";
import Search from "../components/Search";
import Footer from "../components/Footer";

const Explore = () => {
  return (
    <div id="explore">
      <Header />
      {/* <Search/> */}
      <div id="list-container">
        <CardList list={exploreList} />
      </div>
      <Footer />
    </div>
  );
};

export default Explore;

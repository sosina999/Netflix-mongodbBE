import List from "../../components/list/List";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type='Tv Series'/>
      {/* <Featured /> */}

      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;

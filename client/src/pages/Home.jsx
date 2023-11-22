import React from 'react'; 
import CategoryMenu from "../components/CategoryMenu";
import Nav from "../components/Nav";
import PetSearch from "../components/petFinder/PetSearch"; 

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <Nav />
      <PetSearch />
    </div>
  );
};

export default Home;

import CategoryMenu from "../components/CategoryMenu";
import Nav from "../components/Nav";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import photo from '../assets/images/photo1.png';
import photoTwo from '../assets/images/photo2.png';

const Home = () => {
  return (
    <div className="grid">
      <aside className="sidebar">
        <h3>Find your match today!</h3>
        <img src={photo}/>
        <p>"She's the best dog anyone could ever ask for. We couldn't be any happier!" -Kathy</p>
        <img src={photoTwo}/>
      </aside>
      <div className="aboutUs">
        <h2>About Us</h2>
        <p>Paw Pals is an online, searchable database of animals who are in need of a home. Our mission is to increase awareness of the pets that are available for adoption in your local area. We strongly believe that every pet deserves a second chance. Adoption isn't the only way you can make an impact. See our Donate Page to view a list of local shelters you can volunteer or make a donation at.</p>
      </div>
      <CategoryMenu />
    </div>
  );
};

export default Home;

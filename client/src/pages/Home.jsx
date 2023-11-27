import CategoryMenu from "../components/CategoryMenu";
import Nav from "../components/Nav";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
  return (
    <div className="grid">
      <aside className="sidebar">
        <h3>Random</h3>
      </aside>
      <div className="aboutUs">
        <h2>About Us</h2>
        <p>Paw Pals is an online, searchable database of animals who are in need of a home. Our mission is to increase awareness of the pets that are available for adoption in your local area. We strongly believe that every pet deserves a second chance. Adoption isn't the only way you can make an impact. See our Donate Page to view a list of local shelters you can volunteer or make a donation at.</p>
      </div>
      <CategoryMenu />
      <Card style={{ width: '18rem' }} className='display'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Pet Name</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='favorites'>View Pet</Button>
        <Button variant="primary" className='favorites'>Add to Favorites</Button>
      </Card.Body>
    </Card>
    </div>
  );
};

export default Home;

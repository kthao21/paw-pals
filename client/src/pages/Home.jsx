import CategoryMenu from "../components/CategoryMenu";
import Nav from "../components/Nav";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <Card style={{ width: '18rem' }} className='display'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
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

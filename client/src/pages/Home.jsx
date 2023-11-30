import CategoryMenu from "../components/CategoryMenu";
import Nav from "../components/Nav";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import photo from '../assets/images/photo1.png';
import photoTwo from '../assets/images/photo2.png';
import { GET_ANIMALS } from "../utils/queries";
import { useQuery } from "@apollo/client";

import { useStoreContext } from '../utils/GlobalState';
const Home = () => {
  const { loading, data } = useQuery(GET_ANIMALS);
  const [state, dispatch] = useStoreContext();
  const { currentCategory } = state;

  console.log(currentCategory);

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

      {
        data&&data.getAnimals.map(animal => {
          if(currentCategory === ""){
            return (<div>
              <Card style={{ width: '18rem' }} className='display'>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{animal.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            </div>)

          }else if(currentCategory === animal.category._id){
          return (<div>
            <Card style={{ width: '18rem' }} className='display'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{animal.name}</Card.Title>
              <Card.Text>
                {animal.image}
              </Card.Text>
            </Card.Body>
          </Card>
          </div>)
          }
        })
      }
    </div>
  );
};

export default Home;

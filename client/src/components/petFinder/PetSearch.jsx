import { useState, useEffect } from "react";
import { Client } from "@petfinder/petfinder-js";

function PetSearch() {
  const [client, setClient] = useState(null);
  const [error, setError] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const clientResult = new Client({
      apiKey: "wSpGd8B0bwdfUdn5ttI7p6otLfPKSaNMnwQoAeOH5CZHDYgl2U",
      secret: "qoHj7FOC0Pav5WVglCU9XlXbsyBzbnfV3gAjDT1n",
    });

    if (clientResult) {
      setClient(clientResult);
      console.log(client);
    } else {
      setError("No client!");
    }
  }, []);

  useEffect(() => {
    if (client) {
      async function showAnimalsByPostalCode(postalCode, page) {
        let apiResult = null;

        apiResult = await client.animal.search({
          type: "Dog",
          location: postalCode,
          page,
          limit: 100,
        });

        setSearchResult(apiResult.data.animals);
        // apiResult.data.animals.forEach(function (animal) {
        //   console.log(
        //     ` -- ${++dogIdx}: ${animal.name} id: ${animal.id} url: ${
        //       animal.url
        //     }`
        //   );
        // });
      }

      showAnimalsByPostalCode(98370, 1);
    }
  }, [client]);

  return (
    <div>
      <h1>PetSearch is here</h1>
      {error && <p>Error!</p>}
      {searchResult &&
        searchResult.map((animal) => {
          return (
            <p key={animal.id}>
              <img src={animal.photos[0]?.small} />
              <a href={animal.url}>{animal.name}</a>
            </p>
          );
        })}
    </div>
  );
}

export default PetSearch;

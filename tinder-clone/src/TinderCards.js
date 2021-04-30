import React, { useState, useEffect} from "react";
import "./tindercards.css";
import TinderCard from 'react-tinder-card'
import axios from './axios'

function TinderCards() {
  const [people, setPeople] = useState([
    /*
    {
      name: 'Elon Musk',
      imgUrl: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
    },
    {
      name: 'Jeff Bezoz',
      imgUrl: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg"
    },
    */
  ]);

  useEffect(() => {
    console.log('inside useEffect');

    async function fetchData () {
      console.log('inside fetch');
      const req = await axios.get('/cards');
      console.log(req.data);

      setPeople(req.data);
    }
    console.log('fetch called');
    fetchData();
    console.log('fetch executed');
  }, []);
  

  console.log('People:');
  console.log(people);

  const swiped = (direction, nameToDelete) => {
      console.log("removing" + nameToDelete);
      //setLastDirection(direction);
  }

  const outOfFrame = (name) => {
      console.log(name + "left the screen");
  }

  return (
    <div className="tindercards">
      <div className="tindercards__cardcontainer">
        {people.map(person => (
            <TinderCard 
                className = "swipe"
                key = {person.name}
                preventSwipe = {["up", "down"]}
                onSwipe = {(dir) => swiped(dir, person.name)}
                onCardLeftScreen = {() => outOfFrame(person.name)}
            >
              <div style = {{ backgroundImage: "url("+ person.imgUrl +")" }} className = "card">
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;

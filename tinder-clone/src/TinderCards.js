import React, { useState, useEffect } from "react";
import "./tindercards.css";
import TinderCard from 'react-tinder-card'
import axios from './axios'

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    //console.log('req :');
    async function fetchData() {
      const req = await axios.get('/cards').then(console.log('success')).catch(console.log('error'))
      console.log('req :');
      console.log(req.data);

      setPeople(req.data);
    }

    fetchData();
  }, []);

  console.log('Pep:');
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

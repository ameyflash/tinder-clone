import React, { Component } from "react";
import "./tindercards.css";
import TinderCard from 'react-tinder-card'
import axios from './axios'

class TinderCards extends Component {
    state = {  
        people : []
    }

    componentDidMount = () => {
        this.getCard();
    }

    getCard = () => {
        axios.get('/cards')
        .then( (res) => {
            const data = res.data;
            this.setState({ people : data});
            //console.log('Cards Retrieved')
        })
        .catch(err => console.log(err))
    }

    displayCard = (people) => {
        //if (!cards.length) return null;
        const swiped = (direction, nameToDelete) => {
            console.log("removing" + nameToDelete);
            //setLastDirection(direction);
        }
      
        const outOfFrame = (name) => {
            console.log(name + "left the screen");
        }
      

        return people.map((person, cid) => {
            return (
                <div className="tindercards">
                    <div className="tindercards__cardcontainer">
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
                    </div>
                </div>
            )
        })
    }

    render() { 
        return (
            <div>
                {this.displayTweet(this.state.people)}
            </div>
        );
    }
}

export default TinderCards;

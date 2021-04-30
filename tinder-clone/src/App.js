import './App.css';
import Header from './Header'
import TinderCards from './TinderCards';
//import TinderClassCards from './TinderClassCards';
import SwipeButtons from './SwipeButtons'

function App() {
  return (
    //BEM class naming convention
    <div className="app">
      
    {/* header */}
    <Header />

    {/* Tinder card */}
    {/*
    <TinderClassCards />
    */}
    <TinderCards />

    {/* swipe buttons */}
    <SwipeButtons />

    </div>
  );
}

export default App;
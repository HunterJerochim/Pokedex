import React from "react"
import Search from './components/Search/search'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [pokeData, setPokeData] = React.useState({})
    const name = pokeData.name
    const img = pokeData.sprites?.other["official-artwork"]?.front_default
    const about = {
      type: pokeData.types?.map(type => type.type.name),
      height: pokeData.height,
      weight: pokeData.weight,
      abilities: pokeData.abilities?.map(ability => ability.ability.name),
    }
    

  

    

   const [showAbout, setShowAbout] = React.useState(false)
   const [showStats, setShowStats] = React.useState(false)
   
   function toggleAbout() {
    setShowAbout(prevShowAbout => !prevShowAbout)
    console.log(showAbout)
   }


   // check toggleStats //


   function toggleStats() {
    setShowStats(prevShowStats => !prevShowStats)
    console.log(showStats)
   }

  async function getPokeData(value) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
    const responseJSON = await response.json()
      setPokeData(responseJSON)
        console.log({responseJSON, response})
  } 

  return (
    <div>
      <Search handleSubmit={getPokeData} />
      <div className="container">
        <div className="image--container">
          {name ? <h1 className="pokemon--name">{name.charAt(0).toUpperCase() + name.slice(1)}</h1> : <h1 className="pokemon--name"></h1>}
          {img ? <img className="pokemon--image" src={img}/> : <FontAwesomeIcon icon={ faQuestion } className="image--unknown" />}
        </div>
        
        <div className="button--container">
          <div className="button--stats--container">
          <button 
            className="button--stats" 
            onClick={toggleAbout}>About
          </button>
        
        {showAbout && (
          name ? (
          <div className="about--container--conditional">
            <p>Type: {about.type.join(", ")}</p>
            <p>Height: {about.height}</p>
            <p>Weight: {about.weight}</p>
            <p>Abilities: {about.abilities.join(", ")}</p>
            </div>
          ) : (
            <div className="about--container--conditional">
            <p>Please enter a Pokémon name</p>
            </div>
          )
        )}

          <button 
            className="button--stats"
            onClick={toggleStats}>Base Stats
          </button>

          {showStats && (
            name ? (
              <div className="about--container--conditional">
                <p>Hunter</p>
              </div>
            ) : (
              <div className="about--container--conditional">
              <p>Please enter a Pokémon name</p>
              </div>
          ))}
 
  

          <button className="button--stats">Moves</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;


import PokemonCards from "../PokemonCard"
import "./styles.css"

function Pokedex(){
    return(
        <div className="pokedex">
            <div className="pokemon">
                <p>Bulbasaur</p>
                <img src="/bulbasaur.png" alt="Bulbasaur"/>           
            </div>
                    
            <div className="pokemon">
                <p>Ivysaur</p>
                <img src="/ivysaur.png" alt="Ivysaur"/>           
            </div>

            <div className="pokemon">
                <p>Venusaur</p>
                <img src="/venusaur.png" alt="Venusaur"/>           
            </div>

            <div className="pokemon" id="charmander">
                <p>Charmander</p>
                <img src="/charmander.png" alt="Charmander"/>           
            </div>
        </div>
    )
}

export default Pokedex
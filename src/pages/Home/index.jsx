import Pokedex from "../../components/Pokedex"
import PokemonCards from "../../components/PokemonCard"
import "./styles.css"

function Home(){
    return(
        <div className="home">
            <div className="titulo">POKEDEX</div>
            <Pokedex/>
        </div>
    )
}

export default Home
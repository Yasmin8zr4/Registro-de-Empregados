import "./styles.css"

function PokemonCard({nome, imagem}){
    return(
        <div className="pokemon">{nome}
            <img src={imagem} alt={nome}/>           
        </div>
    )
}
export default PokemonCard
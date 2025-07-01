
import Table from "../../components/Table"
import Title from "../../components/tITLE"
import "./styles.css"

function Home(){
    return(
        <div className="home">
            <Title/>
            <h1>Registro de Empregados</h1>
            <Table/>
        </div>
    )
}

export default Home
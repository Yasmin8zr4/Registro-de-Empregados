import "./styles.css"

function Add() {
  return (
    <button onClick={mensagemAdd} className="add">Adicionar Novo Empregado</button>
  )
}

function mensagemAdd() {
  return (
    alert("Esse botão adiciona um novo perfil de funcionário")
  )
}

export default Add



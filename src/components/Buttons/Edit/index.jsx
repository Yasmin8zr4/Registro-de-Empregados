import "./styles.css"

function Buttons() {
  return (
    <td>
      <button onClick={mensagemEdit} className="action edit">Edit</button>
      <button onClick={mensagemDelete} className="action delete">Delete</button>
    </td>
  )
}

function mensagemEdit() {
  return (
    alert("Esse botão abre a tela para edição do perfil do funcionário")
  )
}

function mensagemDelete() {
  return (
    alert("Esse botão deleta o perfil do funcionário")
  )
}

export default Buttons



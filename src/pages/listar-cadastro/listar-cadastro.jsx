import React from 'react'

const ListarCadastro = () => {
  console.log("oi")
  return (
    <div>
      <h1>Listar Cadastros</h1>
      <table>

        <thead >

          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ação</th>
          </tr>
          <tr>
          <td>Usuario.Id</td>
          <td>Usuario.Nome</td>
          <td>Usuario.Email</td>
          <td>Usuario.Ação</td>
          </tr>
        </thead>


        <tbody>


        </tbody>
      </table>
    </div>
  )
}

export default ListarCadastro
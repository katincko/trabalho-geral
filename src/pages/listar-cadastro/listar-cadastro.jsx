import React from 'react'
import styles from './listar-cadastro.module.css'
 
const ListarCadastro = () => {
  console.log(styles)
  return (
    <div className={styles.tudo}>
      <h1>Listar Cadastros</h1>

      <div className={styles.frame}>  

      <h2>Gerenciamento de Cadastros</h2>
      <h3>Lista de todos os membros cadastrados na empresa</h3>
      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ação</th>
          </tr>
         
        </thead>


        <tbody>

        <tr className={styles.conteudo}>
        <td>Usuario.Id</td>
          <td>Usuario.Nome</td>
          <td>Usuario.Email</td>
          <td>Usuario.Ação</td>
        </tr>
        
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default ListarCadastro
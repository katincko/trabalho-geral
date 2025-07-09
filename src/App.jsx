import './App.css'
import ListarCadastro from './pages/listar-cadastro/listar-cadastro'

function App() {
  console.log("logou")
  return (
    <>
      <header>
        <h1>HEADER AQUI FINGE QUE O HEADER ESTÁ AQUI</h1>
      </header>
      <main>
        <ListarCadastro />

      </main>
     
      <footer>
        <h1>FOOTER AQUI FINGE QUE O FOOTER ESTÁ AQUI</h1>
      </footer>
    </>
  )
}

export default App
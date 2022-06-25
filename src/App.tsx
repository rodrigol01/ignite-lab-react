import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { client } from "./lib/apollo"
import { Router } from "./router"

function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ApolloProvider>
    // desafios: deixar responsivo 
    // componentizar alguns elementos
    // aprimorar a pagina de event
    // componente video: aprimorar o carregando da tela quando os dados do CMS ainda não tiverem carregado
  )
}

export default App

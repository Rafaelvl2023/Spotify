import React from 'react'
import ReactDOM from 'react-dom/client'
import Navigation from './Components/Navigation/nav.jsx'
import Principal from './Components/Conteudo/principal.jsx'
import Servicos from './Components/Servicos/servicos.jsx'
import Recursos from './Components/Recursos/recursos.jsx'
import Footer from './Components/Footer/footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation />
    <Principal />
    <Servicos />
    <Recursos />
    <Footer />
  </React.StrictMode>,
)


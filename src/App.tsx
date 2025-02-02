import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import React from 'react'
import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/sidebar'
import Sobre from './containers/sobre'
import Projetos from './containers/projetos'
import temaLight from './themes/lights'
import temaDark from './themes/dark'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App

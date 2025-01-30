import React from 'react'
import Titulo from '../titulo'
import Paragrafo from '../Paragrafo'

import { Card, LinkBotao } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Titulo fontSize={16}>Projeto - Lista de Tarefas</Titulo>
      <Paragrafo tipo="secundario">
        Lista de tarefas feita com o VueJs
      </Paragrafo>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}

export default Projeto

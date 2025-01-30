import React from 'react'
import Titulo from '../../components/titulo'
import Projeto from '../../components/projeto'

import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo> {/* Passando o valor de fontSize */}
    <Lista>
      <li>
        <Projeto></Projeto>
      </li>
      <li>
        <Projeto></Projeto>
      </li>
      <li>
        <Projeto></Projeto>
      </li>
      <li>
        <Projeto></Projeto>
      </li>
      <li>
        <Projeto></Projeto>
      </li>
      <li>
        <Projeto></Projeto>
      </li>
      <li>
        <Projeto></Projeto>
      </li>
      <li>
        <Projeto></Projeto>
      </li>
      <li>
        <Projeto></Projeto>
      </li>
    </Lista>
  </section>
)

export default Projetos

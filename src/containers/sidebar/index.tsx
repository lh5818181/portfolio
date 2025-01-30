import React from 'react'
import Titulo from '../../components/titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'

import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Luis Henrique</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        lh5818181
      </Paragrafo>
      <Descricao fontSize={12}>Engenheiro Front-end</Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar

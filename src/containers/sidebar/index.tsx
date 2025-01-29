import React from 'react'
import Titulo from '../../components/titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'

const Sidebar = () => (
  <aside>
    <Avatar />
    <Titulo fontSize={20}>Luis Henrique</Titulo>
    <Paragrafo tipo="secundario" fontSize={16}>
      lh5818181
    </Paragrafo>
  </aside>
)

export default Sidebar

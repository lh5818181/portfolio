import React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
  fontSize?: number
  tipo?: string
}

const ParagrafoEstilo = styled.p<Props>`
  color: ${(props) =>
    props.tipo === 'principal'
      ? '#282a35'
      : '#949494'}; // Usando 'tipo' para definir a cor
  font-size: ${(props) =>
    props.fontSize || 14}px; // Definindo um valor padrão de 14px
  line-height: 22px;
`

const Paragrafo = ({ children, fontSize = 14, tipo }: Props) => (
  <ParagrafoEstilo fontSize={fontSize} tipo={tipo}>
    {children}
  </ParagrafoEstilo>
)

export default Paragrafo

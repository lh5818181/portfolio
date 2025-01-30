import styled from 'styled-components'
import React from 'react'

type Props = {
  children: React.ReactNode
  fontSize: number
}

const TituloEstilo = styled.h3<Props>`
  color: #282a35;
  font-size: ${(props) => props.fontSize}px;
  font-weight: bold;
  margin-bottom: 16px;
`

const Titulo = (props: Props) => (
  <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
)

export default Titulo

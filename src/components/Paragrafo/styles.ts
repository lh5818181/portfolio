import styled from "styled-components"

type Props = {
  children: React.ReactNode
  fontSize: number
  tipo?: "principal" | "secundario" // Define o tipo como uma enumeração de strings
}

export const P = styled.p<Props>`
  font-size: ${(props) => props.fontSize}px // Usando 'fontSize' da prop
  color: ${(props) => (props.tipo === "principal" ? "#282a35" : "#949494")}
  line-height: 22px
`

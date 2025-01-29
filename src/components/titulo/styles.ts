import styled from "styled-components"

type Props = {
  children: React.ReactNode
  fontSize: number
}

export const Titulo = styled.h3<Props>`
  color: #282a35;
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "14px")};
  font-weight: bold;
  margin-bottom: 26px;
`

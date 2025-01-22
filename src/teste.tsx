import React from "react"
import styled from "styled-components"

interface BotaoProps {
  principal?: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? "green" : "red")};
  font-size: ${(props) => props.fontSize || "inherit"};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-trought;
  }
`

const Teste: React.FC<{ principal?: boolean }> = (props) => {
  return (
    <>
      <Botao principal={props.principal}>Enviar</Botao>
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo as="a">
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste

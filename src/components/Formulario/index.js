import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (e) => {
    e.preventDefault()

    props.aoNovoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <CampoTexto
          label="Nome"
          value={nome}
          aoSalvar={valor => setNome(valor)}
          obrigatorio={true}
          placeholder="Digite seu nome"
        />

        <CampoTexto
          label="Cargo"
          value={cargo}
          aoSalvar={valor => setCargo(valor)}
          obrigatorio={true}
          placeholder="Digite seu cargo"
        />

        <CampoTexto
          label="Imagem"
          value={imagem}
          aoSalvar={valor => setImagem(valor)}
          placeholder="Digite o endereço da imagem"
        />

        <ListaSuspensa
          label="Time"
          value={time}
          aoSalvar={valor => setTime(valor)}
          obrigatorio={true}
          itens={props.times}
        />

        <Botao>Criar card</Botao>
      </form>
    </section>
  )
}

export default Formulario
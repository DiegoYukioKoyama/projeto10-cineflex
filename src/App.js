import Cabecalho from './components/Cabecalho';
import styled from 'styled-components';
import ListaFilmes from './components/ListaFilmes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sessoes from './components/Sessoes';
import Assentos from './components/Assentos';
import { useState } from 'react';
import Sucesso from './components/Sucesso';

export default function App() {
  const [assentoSelecionado, setAssentoSelecionado] = useState([])
  const [nome, setNome] = useState("")
  const [cpf, setCpf] = useState("")
  const [infoFilme, setInfoFilme] = useState([])
  const [dia, setDia] = useState("")
  const [hora, setHora] = useState("")
  const [numeroAssento, setNumeroAssento] = useState([])

  function clickSessao(s, name) {
    setDia(s)
    setHora(name)
  }

  function clicarAssento(assentoClicado, name) {
    if (assentoSelecionado.includes(assentoClicado)) {
      assentoSelecionado.splice(assentoSelecionado.indexOf(assentoClicado), 1)
      setAssentoSelecionado([...assentoSelecionado])
    } else {
      setAssentoSelecionado([...assentoSelecionado, assentoClicado])
      setNumeroAssento([...numeroAssento, name])
    }
  }

  return (
    <BrowserRouter>
      <ContainerTela>
        <Cabecalho />
        <Routes>
          <Route path="/" element={<ListaFilmes />} />
          <Route path="/sessoes/:id" element={<Sessoes
            infoFilme={infoFilme}
            setInfoFilme={setInfoFilme}
            clickSessao={clickSessao}
          />} />
          <Route path="/assentos/:id" element={
            <Assentos
              clicarAssento={clicarAssento}
              assentoSelecionado={assentoSelecionado}
              setAssentoSelecionado={setAssentoSelecionado}
              nome={nome} setNome={setNome}
              cpf={cpf} setCpf={setCpf}
              infoFilme={infoFilme}
              dia={dia} hora={hora}
            />} />
          <Route path="/sucesso" element={
            <Sucesso
              infoFilme={infoFilme}
              dia={dia} hora={hora}
              numeroAssento={numeroAssento}
              setNumeroAssento={setNumeroAssento}
              nome={nome} cpf={cpf}
            />} />
        </Routes>
      </ContainerTela>
    </BrowserRouter>
  )
}

const ContainerTela = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FFFFFF;
    margin-top: 8vh;  
  `
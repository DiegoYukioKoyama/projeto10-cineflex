import Cabecalho from './components/Cabecalho';
import styled from 'styled-components';
import ListaFilmes from './components/ListaFilmes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sessoes from './components/Sessoes';
import Assentos from './components/Assentos';
import { useState } from 'react';

export default function App() {
  const [assentoSelecionado, setAssentoSelecionado] = useState([])
  const [nome, setNome] = useState("")
  const [cpf, setCpf] = useState("")
  const [infoFilme, setInfoFilme] = useState([])
  const [dia, setDia] = useState("")
  const [hora, setHora] = useState("")

  function clickSessao(weekday, name){
    setDia(weekday)
    setHora(name)
  }

  function clicarAssento(assentoClicado) {
    if (assentoSelecionado.includes(assentoClicado)) {
      assentoSelecionado.splice(assentoSelecionado.indexOf(assentoClicado), 1)
      setAssentoSelecionado([...assentoSelecionado])
    } else {
      setAssentoSelecionado([...assentoSelecionado, assentoClicado])
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
            <Route path="/assentos/:id" element={<Assentos
              clicarAssento={clicarAssento}
              assentoSelecionado={assentoSelecionado}
              setAssentoSelecionado={setAssentoSelecionado}
              nome={nome} setNome={setNome}
              cpf={cpf} setCpf={setCpf}
              infoFilme={infoFilme}
              dia={dia} hora={hora}  
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
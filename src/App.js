import Cabecalho from './components/Cabecalho';
import styled from 'styled-components';
import ListaFilmes from './components/ListaFilmes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sessoes from './components/Sessoes';

export default function App() {
  return (
    <BrowserRouter>
      <ContainerTela>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<ListaFilmes />} />
        <Route path="/sessoes/:id" element={<Sessoes />} />
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
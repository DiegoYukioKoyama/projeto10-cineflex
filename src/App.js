import Cabecalho from './components/Cabecalho';
import styled from 'styled-components';
export default function App() {
  return (
   <ContainerTela>
      <Cabecalho />
   </ContainerTela>
  )
}

const ContainerTela = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #FFFFFF;
`
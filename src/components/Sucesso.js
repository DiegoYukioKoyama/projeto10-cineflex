import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Sucesso(props) {

    const { infoFilme, dia, hora, numeroAssento, setNumeroAssento, nome, cpf } = props

    function clickBtnHome() {
        setNumeroAssento([])
    }

    return (
        <>
            <SubtituloSucesso><h1>Pedido feito com sucesso!</h1></SubtituloSucesso>
            <ContainerInfo>
                <div data-test="movie-info">
                    <h1>Filme e sessão</h1>
                    <p>{infoFilme.title}</p>
                    <p>{dia.date} - {hora}</p>
                </div>
                <div data-test="seats-info">
                    <h2>Ingressos</h2>
                    {numeroAssento.map(n => <p>Assento {n}</p>)}
                </div>
                <div data-test="client-info">
                    <h3>Comprador</h3>
                    <p>Nome: {nome}</p>
                    <p>CPF: {cpf}</p>
                </div>

                <BtnHome><Link data-test="go-home-btn" onClick={clickBtnHome} to={"/"}><button>Voltar pra Home</button></Link></BtnHome>
            </ContainerInfo>
        </>
    )
}

const SubtituloSucesso = styled.div`
    width: 100vw;
    height: 12vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1{
        width: 40vw;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        display: flex;
        align-items: center;
        color: #247A6B;
    }
`
const ContainerInfo = styled.div`
    width: 100vw;    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #293845;
    box-sizing: border-box;
    div{
        margin-top: 20px;
        margin-bottom: 20px;
        padding-left: 29px;
    }
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        color: #293845;
    }
`
const BtnHome = styled.div`
    display: flex;
    justify-content: center;
    button{
        width: 225px;
        height: 42px;
        border-radius: 3px;
        background-color: #E8833A;
        color: #FFFFFF;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        border: none;
        margin-top: 100px;
    }
`
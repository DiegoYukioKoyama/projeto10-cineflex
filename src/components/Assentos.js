import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Assentos(props) {

    const { clicarAssento, assentoSelecionado, setAssentoSelecionado, nome, setNome, cpf, setCpf, infoFilme, dia, hora, numeroAssento } = props
    const { id } = useParams()
    const [assentos, setAssentos] = useState([])
    const selecionado = "#1AAE9E"
    const disponivel = "#C3CFD9"
    const indisponivel = "#FBE192"
    const navigate = useNavigate()

    useEffect(() => {
        setAssentoSelecionado([])
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${id}/seats`)
        requisicao.then((resp) => setAssentos(resp.data.seats))
        requisicao.catch((err) => alert(err.response.data))
    }, [])

    function reservarAssentos(e){
        const body = {  ids: assentoSelecionado, nome, cpf}
        const requisicao = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", body)
        requisicao.then((resp) => console.log(resp))
        requisicao.catch((err) => alert(err.response))
        navigate("/sucesso", {replace: true})
    }

    return (
        <>
            <ContainerPagina>
                <SubtituloAssentos>Selecione o(s) assento(s)</SubtituloAssentos>
                <ContainerAssentos>{assentos.map(a => <ContainerBtn 
                    data-test="seat"
                    active={assentoSelecionado.includes(a.id)}
                    onClick={() => a.isAvailable ? clicarAssento(a.id, a.name) : alert("Esse assento não está disponível")}
                    corAssento={a.isAvailable}
                    key={a.name}
                >{a.name}</ContainerBtn>)}
                </ContainerAssentos>

                <ContainerLegenda>
                    <div><Legenda cor={selecionado}></Legenda>
                        <p>Selecionado</p></div>
                    <div><Legenda cor={disponivel}></Legenda>
                        <p>Disponível</p></div>
                    <div><Legenda cor={indisponivel}></Legenda>
                        <p>Indisponível</p></div>
                </ContainerLegenda>

                <ContainerInput onSubmit={reservarAssentos}>
                    <p>Nome do comprador:</p>
                    <input
                        data-test="client-name"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        type="text" placeholder="Digite seu nome"
                        required
                    />
                    <p>CPF do comprador:</p>
                    <input
                        data-test="client-cpf"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                        type="number"
                        placeholder="Digite seu CPF"
                        required />
                    <BtnSubmit>
                           <button data-test="book-seat-btn" type="submit">Reservar assento(s)</button>
                    </BtnSubmit>
                </ContainerInput>

                <RodapeAssentos data-test="footer">
                    <span><img src={infoFilme.posterURL} alt="poster" /></span>
                    <div>
                        <h1>{infoFilme.title}</h1>
                        <h2>{`${dia.weekday} - ${hora}`}</h2>
                    </div>
                </RodapeAssentos>
            </ContainerPagina>


        </>
    )
}

const ContainerPagina = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`

const SubtituloAssentos = styled.h1`
    width: 100vw;
    height: 12vh;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ContainerAssentos = styled.div`
    width: 329px;
    height: 250px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-left: 24px;
    margin-right: 17px;
`

const ContainerBtn = styled.button`
    width: 26px;
    height: 26px;
    background-color: ${(props) => props.active ? "#1AAE9E" : props.corAssento ? "#C3CFD9" : "#F7C52B"};
    border: 1px solid #808F9D;
    border-radius: 12px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    margin-right: 6px;
    cursor: pointer;
`

const ContainerLegenda = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-around;
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        margin-top: 16px;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const Legenda = styled.div`
    width: 25px;
    height: 25px;
    background-color: ${props => props.cor};
    border: 1px solid #0E7D71;
    border-radius: 17px;
`

const ContainerInput = styled.form`
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    box-sizing: border-box;
    padding-left: 24px;
    padding-right: 24px; 
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
    }
    input{
        width: 327px;
        height: 51px;
        box-sizing: border-box;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        background-color: #FFFFFF;
        margin-bottom: 15px;
    }
`

const BtnSubmit = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    button{
        width: 225px;
        height: 42px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        background-color: #E8833A;
        color: #FFFFFF;
        font-size: 18px;
        box-sizing: border-box;
        border-radius: 3px;
    }
`

const RodapeAssentos = styled.footer`
    width: 100vw;
    height: 13vh;
    display: flex;
    align-items: center;
    background-color: #DFE6ED;
    position: absolute;
    bottom: 0px;
    left: 0px;
    border: 1px solid #9EADBA;
    span{
        width: 64px;
        height: 89px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        margin-left: 10px;
    }
    img{
        width: 48px;
        height: 72px;
    }
    div{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        margin-left: 14px;
    }
`
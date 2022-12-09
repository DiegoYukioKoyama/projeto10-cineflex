import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"

export default function Sessoes() {

    const { id } = useParams()
    const [sessoes, setSessoes] = useState([])
    const [filmeS, setFilmeS] = useState([])
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`)
        requisicao.then((resp) => setSessoes(resp.data.days))
        requisicao.catch((err) => alert(err.response.data))
    }, [])

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`)
        promisse.then((resposta) => setFilmeS(resposta.data))
        promisse.catch((err) => alert(err.response.data))
    },[])
        
    return (
        <>
            <SubTituloSessoes>Selecione o horário</SubTituloSessoes>
            <ListaSessoes>
                <div>
                    {sessoes.map(s => <li key={s.id}>
                    <p>{s.weekday} - {s.date}</p>
                    <Link to={`/assentos/${s.id}`}>{s.showtimes.map(show => <button key={show.id}>{show.name}</button>)}</Link>
                    </li>)}
                </div>
                <RodapeSessoes>
                    <span><img src={filmeS.posterURL} /></span>
                    <h1>{filmeS.title}</h1>
                </RodapeSessoes>
            </ListaSessoes>
        </>
    )
}

const SubTituloSessoes = styled.h1`
    width: 100vw;
    height: 10vh;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #293845;
`

const ListaSessoes = styled.ul`
    width: 100vw;
    padding-bottom: 13vh;
    position: relative;
    div{
        padding-left: 24px;
    }
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        margin-bottom: 22px;
    }
    button{
        width: 83px;
        height: 43px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #FFFFFF;
        background-color: #E8833A;
        border-radius: 3px;
        margin-bottom: 22px;
        margin-right: 8px;  
    }
`

const RodapeSessoes = styled.footer`
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
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        margin-left: 14px;
    }
`
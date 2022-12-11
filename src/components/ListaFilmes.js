import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function ListaFilmes() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        requisicao.then(resp => setFilmes(resp.data))
        requisicao.catch((err) => alert(err.response.data))
    }, [])



    return (
        <>
            <SubTituloListaFilmes>Selecione o filme</SubTituloListaFilmes>
            <Lista>
                {filmes.map(f => <li key={f.id}><Link to={`/sessoes/${f.id}`}><img src={f.posterURL} alt={f.title} /></Link></li>)}
            </Lista>
        </>

    )
}

const SubTituloListaFilmes = styled.h1`
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

const Lista = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li{
        width: 145px;
        height: 209px;
        background-color: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        cursor: pointer;
    }

    img{
        width: 129px;
        height: 193px;
    }
`
import styled from "styled-components";

export default function Cabecalho() {

    return (
        <Titulo>
            <p>CINEFLEX</p>
        </Titulo>
    )

}

const Titulo = styled.div`
    width: 100vw;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #C3CFD9;
    position: absolute;
    left: 0px;
    top: 0px;
    p {
        color: #E8833A;
        font-style: normal;
        font-weight: 400;
        font-family: 'Roboto';
        font-size: 34px;
    }
`
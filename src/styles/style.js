import styled, {createGlobalStyle} from 'styled-components';
import img from '../images/pexels-s-migaj-747964.jpg'

export const AppWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(${img});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
export const GlobalStyle = createGlobalStyle`
    *, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const Section = styled.section`
    width: 40%;
    height: 30%;
    padding: 10px;
    border: 1px solid white;
    background-color: transparent;
    backdrop-filter: blur(5px);
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
        height: 80%;
        display:flex;
        align-items: center;
    }
    button {
        height: 20%;
        display:flex;
        align-items: center;
        padding: 0 10px;
        border: 1px solid white;
        background: linear-gradient(315deg, #ffffff, #d7e1ec);
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
        border-radius: 17px;
        transition: 0.25s;
        &:hover{
            transform: scale(1.05);
        }
    }
    
`
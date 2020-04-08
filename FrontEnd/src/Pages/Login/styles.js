import styled from 'styled-components'
import {fadeIn} from './animations'

export const Contenedor = styled.div `
    ${fadeIn({time: '2s'})}
    position: relative;
    padding: 15px;
    margin: 80px 80px 80px 80px;
    height: 35%;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.5);
    background: rgba(0, 0, 0, 0.5);
    -moz-box-shadow:10px 10px 5px #000000;
    -webkit-box-shadow:10px 10px 5px #000000;
    box-shadow:10px 10px 5px #000000;
    
`
export const Titulo = styled.h1 `
    margin-bottom: 25px;
    text-align: center; 
    font-family: Arial Black; 
    font-weight: bold; 
    font-size: 30px; 
    color: #fff; 
`
export const Subtitulo = styled.h1 `
    
    padding-top: 25px;
    text-align: right; 
    font-family: Arial Black; 
    font-weight: bold; 
    font-size: 24px; 
    color: #379DFF; 
    bottom: 0px; 
   
`
export const Usuario = styled.input `
    ::placeholder{
      color: white;
      font-size: 15px;
      opacity: 0.4;
    }
    text-align: bottom;
    margin:0 0 0 15px;
    font-family: inherit;
    width: auto;
    border: 15px;
    border-bottom: 2px solid gray;
    outline: 0;
    font-size: 1.3rem;
    color: white;
    background: transparent;
    border-color: white;

    &:focus{
        margin:0 0 0 15px;
        text-align: top;
        transition: 0.9s;
        padding-bottom: 0px;  
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(to right, #011e5e, #ffffff);
        border-image-slice: 1;
    }         
`
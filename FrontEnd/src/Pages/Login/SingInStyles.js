import styled from 'styled-components'
import FondoImg from '../../images/fondo.jpg'


export const Fondo = styled.div `
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${FondoImg});
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    -o-background-size: 100% 100%, auto;
    -moz-background-size: 100% 100%, auto;
    -webkit-background-size: 100% 100%, auto;
    background-size: 100% 100%, auto;
    display: flex;
    z-index:-99999;
`
export const Logotipo = styled.img `
    padding-top: 20px;
    width: 300px;
    height:auto;
`
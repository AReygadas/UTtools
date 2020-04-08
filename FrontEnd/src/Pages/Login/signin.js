import React from 'react'
import {Fondo, Logotipo} from './SingInStyles'
import {Contenedor, Titulo, Usuario, Subtitulo} from './styles'
import logo from '../../images/561.png'
import {MDBRow, MDBBtn, MDBContainer} from 'mdbreact'
import Context from '../../Context'

export default class Signin extends React.Component {
      render(){
        return(
        <Context.Consumer>{
            ({activateAuth}) =>{
                return(
                    <React.Fragment>
                        <Fondo>
                            <MDBContainer>
                                <MDBRow center>
                                   <Logotipo src = {logo}></Logotipo>
                                </MDBRow>
                                <MDBRow center>
                                        <Contenedor>
                                    <form onSubmit={activateAuth}>
                                        <Titulo>Inicia Sesion</Titulo>
                                        <Usuario type = "email" placeholder='Correo'  required />
                                        <Usuario type = "password" placeholder='Contraseña' required/>
                                        <br/><br/><br/>
                                        <MDBRow center>
                                            <MDBBtn type='submit' gradient="peach">Ingresar</MDBBtn>
                                        </MDBRow>
                                        <Subtitulo>Registrate aquí</Subtitulo>
                                    </form>
                                </Contenedor>
                                </MDBRow>
                            </MDBContainer>
                        </Fondo>                
                    </React.Fragment>
                )
            }
        }
        </Context.Consumer>
        )
    }
}
    
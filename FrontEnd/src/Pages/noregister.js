import React from 'react'
import {MDBBtn} from 'mdbreact'

export default class noregister extends React.Component{

    render(){
        return(
            <React.Fragment>
                <h1>Aun no has iniciado secion</h1>
                <MDBBtn gradient="peach">Iniciar Sesion</MDBBtn>
            </React.Fragment>
        )
    }
}
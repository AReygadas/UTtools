import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";
import Contexto from './Context'
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
 
const client = new ApolloClient ({
    uri:'http://localhost:5000'
}) 

ReactDOM.render( 
    <Contexto.Provider>
        <ApolloProvider>
            <App /> 
        </ApolloProvider>
    </Contexto.Provider>,
document.getElementById('root'));

registerServiceWorker();
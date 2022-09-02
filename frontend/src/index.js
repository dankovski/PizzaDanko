import ReactDOM from 'react-dom';
import React from 'react'
import App from './App';
import { ContextProvider } from './ContextProvider';


ReactDOM.render((
<ContextProvider>
    <App/>
</ContextProvider>
), document.getElementById('root'));
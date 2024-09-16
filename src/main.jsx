import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import RenderComponent from './Render';
import {BrowserRouter} from 'react-router-dom';

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
   <React.StrictMode>
        <RenderComponent/>
   </React.StrictMode>
)


import * as React from 'react';
import * as ReactDOM from 'react-dom'
import FirstComponent from './Component/FirstComponent'
import UserComponent from './Component/UserComponent'
const css = require('./css/app.scss')
ReactDOM.render(
    <div>
        Good Morning!!
        <FirstComponent name={"Nicole"}/>
    </div>,
    document.getElementById('app')
)
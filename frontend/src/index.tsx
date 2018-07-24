import * as React from 'react';
import * as ReactDOM from 'react-dom'
import FirstComponent from './Component/FirstComponent'

ReactDOM.render(
    <div>
        Hello!
        <FirstComponent name={"Jia"}/>
    </div>,
    document.getElementById('app')
)
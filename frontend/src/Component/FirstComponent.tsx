import * as React from 'react';

interface FirstComponent {
    name? : string
}

const FirstComponent : React.StatelessComponent<FirstComponent> = (props)=>{
    let {name} = props;
    return(
        <div>My name is {name}</div>
    )
}

FirstComponent.defaultProps = {
    name:"Guest"
}


export default FirstComponent;
import * as React from 'react'
import greet from '../../api'

class UserComponent extends React.Component<{}>{
    componentDidMount(){
        let message : string = greet.sayHello().then(res=>console.log(res.data))
    }
}

export default UserComponent
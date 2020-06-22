import React, { Component } from 'react';

class Person extends Component {

    componentsDidMount(){
        console.log(this.props.match);
    }
    render(){
        return(
            <h1>This is Page 5</h1>
        );
    }
}
export default Person;
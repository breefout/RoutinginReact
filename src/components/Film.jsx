import React, { Component } from 'react';

class Film extends Component {

    componentsDidMount(){
        fetch.then((response) => {
            return response.json();
        })
        .then((obj) => console.log(obj));
    }
    render(){
        return(
            <h1>This is Page 4</h1>
        );
    }
}
export default Film;
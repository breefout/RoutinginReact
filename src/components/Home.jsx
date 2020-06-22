import React, { Component } from 'react';

class Home extends Component {

    componentsDidMount(){
        console.log(this.props.match);
    }
    render(){
        return(
            <h1>This is Page 1</h1>
        );
    }
}
export default Home;
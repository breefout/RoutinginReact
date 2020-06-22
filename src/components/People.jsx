import React, { Component } from 'react';

class People extends Component {

    componentsDidMount(){
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(arr => this.setState({ people: arr }))
    }
    render(){
        return <div class="myContainer">
                {this.state.people.map((person) => <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body">
                        <h5 class="card-title">{person['name']}</h5>
                        <p class="card-text">{person['age']}</p>
                        <p class="card-text">{person['gender']}</p>
                    </div>
                </div>)}
            </div>;
    }
}
export default People;
import React, { Component } from 'react';
import { BrowserRouter as Link} from 'react-router-dom'

class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }

    componentsDidMount(){
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(arr => this.setState({ films: arr }))
    }
    render(){
        return <Link class="myContainer">
                {this.state.films.map((film) => <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body">
                        <h5 class="card-title">{film['title']}</h5>
                        <p class="card-text">{film['description']}</p>
                    </div>
                </div>)}
        </Link>;
    }
}
export default Films;
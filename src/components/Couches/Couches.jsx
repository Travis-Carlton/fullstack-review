import React, { Component } from 'react';
import axios from 'axios';

export default class Couches extends Component {
    constructor(){
        super();
        this.state ={
            couches: []
        }
    }

    componentDidMount(){
        axios.get('/api/couches').then(res => {
            this.setState({ couches: res.data })
        })
    }


    render() {
const couches = this.state.couches.map((couch => {
// console.log(couch)

    return <div key={couch.id}>
        <h1>{couch.name}</h1>
        <img src={couch.image} alt=""/>
        <p>Price: {couch.price}</p>
    </div>
}))
        return (
            <div>
                <h1>Couches</h1>
                {couches}

            </div>

        );
    }
}
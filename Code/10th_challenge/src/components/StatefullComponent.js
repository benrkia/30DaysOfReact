import React, { Component } from 'react';

class StatefullComponent extends Component {

    render() {
        
        console.log('Statefull Component is re rendered')
        
        return (
        <h1>StatefullComponent</h1>
        );
    }
}

export default StatefullComponent;
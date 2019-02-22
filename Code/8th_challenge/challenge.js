// The objective of this challenge is to both:
//  1_ test your understanding for what we've done
//  2_ know how the handle event in react

// Fix this code such as the user should be able to tape inside the input and with each change to component should show the result.

class Greet extends React.Component {

    constructor() {
        state = {
            name: ''
        }
    }

    function greeting(event) {
        const name = event.target.value;
        this.state.name = name;
    }


    function render() {
        
        const name = this.state;
        
        return (
            <input
                onchange={this.greeting}
                type='text'
                placeholder='your name goes here' />
            <h3>{name}</h3>
        );
    }

}

class App extends React.Component {

    function render() {
        return(
            <Greet />
        );
    }

}


ReactDOM.render(<App />, document.getElementById('root'));
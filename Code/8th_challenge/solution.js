class Greet extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            name: ''
        }
    }

    greeting = (event) => {
        const name = event.target.value;
        this.setState({name});
    }


    render() {
        
        const {name} = this.state;
        
        return (
            <div>
                <input
                    onChange={this.greeting}
                    type='text'
                    placeholder='your name goes here' />
                <h3>{name}</h3>
            </div>
        );
    }

}

class App extends React.Component {

    render() {
        return(
            <Greet />
        );
    }

}


ReactDOM.render(<App />, document.getElementById('root'));
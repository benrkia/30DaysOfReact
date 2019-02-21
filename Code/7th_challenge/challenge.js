// what is the problem with this code.
// try to change the core of onIncrement function in order to make it work.

const Counter = ({count, onIncrement}) => {

    const incrementOnce = () => {
        onIncrement();
    }

    const incrementTwice = () => {
        onIncrement();
        onIncrement();
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrementOnce} >Increment Once</button>
            <button onClick={incrementTwice} >Increment Twice</button>
        </div>
    );
}

class App extends React.Component {

    state = {
        count: 0
    };

    onIncrement = () => {
        this.setState({count: this.state.count+1});
    }

    render() {
        
        const {count} = this.state;
        
        return (
            <div>
                <Counter onIncrement={this.onIncrement} count={count} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
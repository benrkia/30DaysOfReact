const Result = (props) => {
    const {value} = props;

    return(
        <h3>{Number(value)}</h3>
    );
}

Result.propTypes = {
    value: PropTypes.number.isRequired
};

class Control extends React.Component {

    static propTypes = {
        value: PropTypes.number.isRequired
    };

    constructor(props){
        super(props);
        
        this.state = {
        input: ''
        }
    }

    handleChange = (event) => {
        const {id, value} = event.target;
        this.setState({
        [id]: value
        });
    };

    add = () => {
        const {input} = this.state;
        const {value} = this.props;
        
        const newValue = value + Number(input);
        this.setState({input: ''}, 
        this.props.updateValue(newValue)
        );
        
    }

    sub = () => {
        const {input} = this.state;
        const {value} = this.props;
        
        const newValue = value - Number(input);
        this.setState({input: ''}, 
        this.props.updateValue(newValue)
        );
        
    }

    mul = () => {
        const {input} = this.state;
        const {value} = this.props;
        
        const newValue = value * Number(input);
        this.setState({input: ''}, 
        this.props.updateValue(newValue)
        );
        
    }

    div = () => {
        const {input} = this.state;
        const {value} = this.props;
        
        const newValue = value / Number(input);
        this.setState({input: ''}, 
        this.props.updateValue(newValue)
        );
        
    }

    clr = () => {
        this.props.updateValue(0);
    }

    render() {
        
        const {input} = this.state;
        
        return(
            <div>
                <input
                id='input'
                onChange={this.handleChange}
                style={InputStyle}
                value={input} />
                <br />
                
                <button
                onClick={this.add}
                style={ButtonStyle}>
                +
                </button>
                
                <button
                onClick={this.sub}
                style={ButtonStyle}>
                -
                </button>
                
                <button
                onClick={this.mul}
                style={ButtonStyle}>
                *
                </button>
                
                <button
                onClick={this.div}
                style={ButtonStyle}>
                /
                </button>
                
                <button
                onClick={this.clr}
                style={ButtonStyle}>
                C
                </button>
            </div>
        );
    }
}

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
        value: 0,
        };
    }

    updateValue = (value) => {
        this.setState({value});
    }

    render() {
        
        const {value, clear} = this.state;
        
        return (
        <div>
            <Result value={value} />
            <Control value={value} updateValue={this.updateValue} />
        </div>
        );
    }

}

const ButtonStyle = {
    margin: '2px 1px',
    borderRadius: '5px',
    borderWidth: '1px',
    borderColor: '#ccc',
    borderStyle: 'solid',
    padding: '4px 10px',
}

const InputStyle = {
    ...ButtonStyle,
    outline: 0
}

ReactDOM.render(<Calculator />, document.getElementById('root'));
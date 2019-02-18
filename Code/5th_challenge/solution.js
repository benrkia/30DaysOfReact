const colors = ['red', 'green', 'black', 'blue', 'brown'];

class Circle extends React.Component {

    constructor(props) {
        super(props);
        
        const {colors} = props;
        this.state = {
            colors,
            colorsLength: colors.length,
            i: 0
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        const {colorsLength, i} = this.state;
        this.setState({
          i: (i+1)%colorsLength
        });
    }

    render() {

        const {colors, i} = this.state;
        const class_name = 'circle '+colors[i];

        return (
            <div className={class_name} />
        );

    }

}

ReactDOM.render(<Circle colors={colors} />, document.getElementById('root'));
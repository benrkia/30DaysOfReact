const timeZones = [
    'Africa/Casablanca',
    'Australia/Brisbane',
    'Asia/Shanghai',
    'America/New_York',
    'Europe/Lisbon',
    'Europe/Oslo',
    'Asia/Qatar',
    'Asia/Riyadh',
    'Asia/Seoul',
    'Africa/Libreville',
];

class Clock extends React.Component {

    constructor(props) {
        super(props);

        const {timeZone} = props;

        this.state = {
            timeZone, 
            date: ''
        }
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
        const {timeZone} = this.state;

        const date = new Date().toLocaleString('en-US', {timeZone});

        this.setState({date});

    }

    render() {

        const {date, timeZone} = this.state;

        const city = timeZone.split('/')[1];

        return (
            <div>
                <label>{city}</label>
                <h3 className='clock'>{date}</h3>
            </div>
        );

    }

}

class WorldClock extends React.Component {

    render() {

        return (
            <div>
                {
                    timeZones.map(timeZone => (
                        <Clock timeZone={timeZone} />
                    ))
                }
            </div>
        );
    }

}

ReactDOM.render(<WorldClock />, document.getElementById('root'));
const MAD = ({ amount }) => (<div>{ amount * 9.66 } mad</div>);
const EGP = ({ amount }) => (<div>{ amount * 17.31 } egp</div>);
const AED = ({ amount }) => (<div>{ amount * 3.67 } aed</div>);
const QAR = ({ amount }) => (<div>{ amount * 3.64 } qar</div>);


class Amount extends React.Component {

    state = {
        amount: 0,
    }

    onIncrement = () => {
        this.setState(state => ({
            amount: state.amount + 1
        }));
    }

    onDecrement = () => {
        this.setState(state => ({
            amount: state.amount - 1
        }));
    }

    render() {

        const { amount } = this.state;
        
        return (

            <div>
                <h3>Original Amount: {amount} usd</h3>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>

                {this.props.children(amount)}

                {/* Uncomment this to enable the second solution
                {this.props.renderAfricanCurrencies(amount)}
                {this.props.renderAsianCurrencies(amount)} */}

            </div>

        );
    }
}

const App = () => (

    <Amount>
        {amount => (
            <React.Fragment>
                <div>
                    <h1>Africa</h1>
                    <MAD amount={amount} />
                    <EGP amount={amount} />
                </div>
                <div>
                    <h1>Asia</h1>
                    <AED amount={amount} />
                    <QAR amount={amount} />
                </div>
            </React.Fragment>
        )}
    </Amount>

    // Second solution
    // <Amount 
    //     renderAfricanCurrencies = {
    //         amount => (
    //             <div>
    //                 <h1>Africa</h1>
    //                 <MAD amount={amount} />
    //                 <EGP amount={amount} />
    //             </div>
    //         )
    //     }

    //     renderAsianCurrencies = {
    //         amount => (
    //             <div>
    //                 <h1>Asia</h1>
    //                 <AED amount={amount} />
    //                 <QAR amount={amount} />
    //             </div>
    //         )
    //     }
    // />

);

ReactDOM.render(<App />, document.getElementById('root'));
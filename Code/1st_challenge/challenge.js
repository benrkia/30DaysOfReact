class MyComponent extends React.Component {
  
  constructor() {
    super();
    this.state = {
      names: ['name 1', 'name 2', 'name 3'],
    }
  }
  
  addName = () => {
    // Do not change in this function
    const name = document.querySelector("#input").value;
    if(name.length === 0){
      alert("insert a valid name");
      return;
    }
    let names = this.state.names;
    names.push(name);
    this.setState({names})
  }

  render () {
    const {names} = this.state;
    const items = [];
    return (
        <label>Name: </label>
        <input type="text" id="input" />
        <button onClick={this.addName}>Add</button>
        <br>
        <ul>{
          for (const [index, value] of names.entries()) {
            items.push(<li key={index}>{value}</li>)
          }
         }
        </ul>
    );
  } 
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));



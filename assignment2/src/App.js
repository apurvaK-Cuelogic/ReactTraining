import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent'
class App extends Component {
  state = {
    length: 0,
    inputString: ''
  }
  textLengthHandler = (event) =>{
    const str = event.target.value;
    this.setState({inputString: str})
    this.setState({length: str.length})
  }

  deleteCharacterHandler = (index) =>{
    const inputString = {...this.state.inputString};
    //console.log(inputString);
    // inputString.splice(index,1);  
    //inputString.slice(0, 3) + inputString.slice(4);
    // this.setState({inputString: inputString});
  }
  render() {
    let charData = null;

    if(this.state.length > 0){
      charData = (
        <div>
          {this.state.inputString.split('').map((character, index) => {
            return <CharComponent char={character} click={this.deleteCharacterHandler.bind(this, index)}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Assignment 2</h1>
        <input type="text" onChange={this.textLengthHandler}/>
        <p>Length of string {this.state.length}</p>
        <Validation len={this.state.length} />
        {charData}
      </div>
    );
  }
}

export default App;

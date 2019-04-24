import React from 'react';
import logo from './logo.svg';
import './App.css';
import Types from './Types';
import Teams from './Teams';
import Players from './Players';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sportSelected: '',
      teamSelected: ''
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Types buttonHandler={this._filterType} />
          {this.state.sportSelected ? <Teams sportSelected={this.state.sportSelected} buttonHandler={this._filterSport} /> : <></>}
          {this.state.teamSelected ? <Players sportSelected={this.state.sportSelected} teamSelected={this.state.teamSelected} /> : <></>}
        </header>
      </div>
    );
  }

  _filterType = (e) => {
    console.log(e.target.value)
    this.setState({
      sportSelected: e.target.value,
      teamSelected: ''
    })
  }

  _filterSport = (e) => {
    console.log(e.target.value)
    this.setState({
      teamSelected: e.target.value
    })
  }

}

export default App;

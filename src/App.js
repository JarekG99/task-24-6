import React, { Component } from 'react';
import logo from './logo.svg';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';
import './App.css';

class App extends Component {
  constructor() {
   super();

   this.state = {
     players: [
       {
         name: 'Kunegunda',
         score: 5,
       },
       {
         name: 'Antoś',
         score: 0,
       }
     ]
   }
 }

 onScoreUpdate = (playerIndex, scoreChange) => {
  this.setState({
    players: this.state.players.map((player, index) => {
      if (index === playerIndex) {
        return { ...player, score: player.score + scoreChange };
      }
      return player;
    })
  })
}

onPlayerAdd = (playerName) => {
  const newPlayer = {
    name: playerName,
    score: 0,
  }
  this.setState({
    players: [...this.state.players, newPlayer]
  })
}


onPlayerRemove = (i) =>  {
  this.setState({
  players: this.state.players.filter((item, index) => (index !==i)),
  })
  return this.state.players;
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-main">
        <AddPlayer onPlayerAdd={this.onPlayerAdd} />
        <PlayersList
          players={this.state.players}
          onScoreUpdate={this.onScoreUpdate}
          onPlayerRemove={this.onPlayerRemove} />
      </div>
    </div>
  );
 }
}

export default App;

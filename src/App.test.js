import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

it('renders without crashing', () => {

  shallow(<App />);
});

it('should update player score', () => {

  const appComponent = shallow(<App players={[]} />);
  const players = [
    {
      name: 'Kunegunda',
      score: 5,
    },
    {
      name: 'Antoś',
      score: 0,
    }
  ];

  appComponent.setState({players});

  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');

  onScoreUpdate(0, 5);

  const playersAfterUpdate = appComponent.state().players;

  expect(playersAfterUpdate[0].score).toEqual(10);
});

it('should update PlayersList with added player', () => {

  const appComponent = shallow(<App players={[]} />);

  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd('Ania');

  const players = appComponent.state('players');

  expect(players.length).toEqual(3);
  expect(players[2].name).toEqual('Ania');
  expect(players[2].score).toEqual(0);
})

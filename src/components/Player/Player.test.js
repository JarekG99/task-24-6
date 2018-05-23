import React from 'react';
import ReactDOM from 'react-dom';
import Player from './Player';
import { shallow } from 'enzyme';
// import expect from 'expect'

it('renders without crashing', () => {

  shallow(<Player />);

});

it('renders correct name', () => {
  const playerNamePassed = 'Ania';
  const playerComponent = shallow(<Player name={playerNamePassed} />);

  const playerNameRendered = playerComponent.find('.Player__name').text();

  expect(playerNameRendered).toEqual(playerNamePassed);
});

it('renders correct score', () => {
  const playerScorePassed = 5;
  const playerComponent = shallow(<Player score={playerScorePassed} />);

  const playerScoreRendered = Number(playerComponent.find('.Player__score').text());
  expect(playerScoreRendered).toEqual(playerScorePassed);
});

it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

  const plusButton = playerComponent.find('.Player__button').at(1);

  plusButton.simulate('click');

  expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});

it('should call mockedOnPlayerScoreChange with -1 when minus button is clicked', () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);
  
  const minusButton = playerComponent.find('.Player__button').first();

  minusButton.simulate('click');

  expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});

it('should call mockedOnPlayerRemove when the button is clicked', () => {
  const mockedOnPlayerRemove = jest.fn();
  const playerComponent = shallow(<Player onPlayerRemove={mockedOnPlayerRemove} />);
  const a = playerComponent.length -1;

  const removeButton = playerComponent.find('.Player__button').last();

  removeButton.simulate('click');

  expect(mockedOnPlayerRemove).toHaveLength(a);
})

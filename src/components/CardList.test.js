import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';
const filteredComics = [{
  id: 1,
  userId: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
}]

it('renders without crashing', () => {
  expect(shallow(<CardList comics={filteredComics} />)).toMatchSnapshot();
});
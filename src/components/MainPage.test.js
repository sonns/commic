import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestComics: jest.fn(),
    comics: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps} />)
})

it('renders without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('fileters Comics', () => {
  const mockProps = {
    onRequestComics: jest.fn(),
    comics: [],
    searchField: 'a',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps} />)
  expect(wrapper.instance().filterComics()).toEqual([]);
});

it('fileters Comics correctly', () => {
  const filteredComics = [{
    id: 1,
    userId: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  }]
  const mockProps = {
    onRequestComics: jest.fn(),
    comics: [{
      id: 1,
      userId: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    }],
    searchField: 'sunt',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps} />)

  expect(wrapper.instance().filterComics()).toEqual(filteredComics);
});

it('fileters Comics correctly 2', () => {
  const filteredComics = [{
    id: 1,
    userId: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  }]
  const mockProps = {
    onRequestComics: jest.fn(),
    comics: [{
      id: 1,
      userId: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    }],
    searchField: 'Xavier',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps} />)
  expect(wrapper.instance().filterComics()).toEqual([]);
});

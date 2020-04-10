import React, { Component } from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import Header from './Header';

export class MainPage extends Component {
  constructor() {
    super()
    this.state = {
      count: 1
    }
  }
  componentDidMount() {
    this.props.onRequestComics();
  }

  filterComics = () => {
    const { comics, searchField } = this.props;
    return comics.filter(anime => {
      return anime.body.toLowerCase().includes(searchField.toLowerCase());
    })
  }

  render() {
    const { onSearchChange, isPending } = this.props;

    return (
      <div className='tc'>
        <Header count={this.state.count} />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              <CardList comics={this.filterComics()} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

export default MainPage

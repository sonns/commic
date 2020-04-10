import {
  CHANGE_SEARCHFIELD,
  REQUEST_COMICS_PENDING,
  REQUEST_COMICS_SUCCESS,
  REQUEST_COMICS_FAILED
} from './constants';

const initialStateSearch = {
  searchField: ''
}

export const searchComics = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload })
    default:
      return state
  }
}

const initialStateComics = {
  comics: [],
  isPending: true
}

export const requestComics = (state = initialStateComics, action = {}) => {
  switch (action.type) {
    case REQUEST_COMICS_PENDING:
      return Object.assign({}, state, { isPending: true })
    case REQUEST_COMICS_SUCCESS:
      return Object.assign({}, state, { comics: action.payload, isPending: false })
    case REQUEST_COMICS_FAILED:
      return Object.assign({}, state, { error: action.payload })
    default:
      return state
  }
}
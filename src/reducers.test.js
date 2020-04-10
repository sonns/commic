import * as reducers from './reducers'
import * as types from './constants'

const initialStateSearch = {
  searchField: ''
}
describe('searchComics reducer', () => {
  it('should return the initial state', () => {
    expect(reducers.searchComics(undefined, {})).toEqual(
      {
        searchField: ""
      }
    )
  })

  it('should handle CHANGE_SEARCHFIELD', () => {
    expect(
      reducers.searchComics(initialStateSearch, {
        type: types.CHANGE_SEARCHFIELD,
        payload: 'abc'
      })
    ).toEqual(
      {
        searchField: "abc"
      }
    )
  })
})

const initialStateComics = {
  comics: [],
  isPending: true
}
describe('requestComics reducer', () => {
  it('should return the initial state', () => {
    expect(reducers.requestComics(undefined, {})).toEqual(
      {
        comics: [],
        isPending: true
      }
    )
  })

  it('should handle REQUEST_COMICS_PENDING action', () => {
    expect(
      reducers.requestComics(initialStateComics, {
        type: types.REQUEST_COMICS_PENDING,
        payload: { isPending: true }
      })
    ).toEqual(
      {
        comics: [],
        isPending: true
      }
    )
  })
  it('should handle REQUEST_COMICS_SUCCESS action', () => {
    expect(
      reducers.requestComics(initialStateComics, {
        type: types.REQUEST_COMICS_SUCCESS,
        payload: [{
          id: '123',
          title: 'test',
          body: 'j@jmail.com'
        }]
      })
    ).toEqual(
      {
        comics: [{
          id: '123',
          title: 'test',
          body: 'j@jmail.com'
        }],
        isPending: false
      }
    )
  })
  it('should handle REQUEST_COMICS_FAILED action', () => {
    expect(
      reducers.requestComics(initialStateComics, {
        type: types.REQUEST_COMICS_FAILED,
        payload: 'NOOO'
      })
    ).toEqual(
      {
        error: 'NOOO',
        comics: [],
        isPending: true
      }
    )
  })
})
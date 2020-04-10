import { apiCall } from './api/api'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_COMICS_PENDING,
  REQUEST_COMICS_SUCCESS,
  REQUEST_COMICS_FAILED
} from './constants'

export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

export const requestComics = () => (dispatch) => {
  dispatch({ type: REQUEST_COMICS_PENDING })
  apiCall('https://jsonplaceholder.typicode.com/posts')
    .then(data => dispatch({ type: REQUEST_COMICS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_COMICS_FAILED, payload: error }))
}
import axios from 'axios';

const INSERT_BOOK = './bookstore/bookreducer/INSERT_BOOK';
const DELETE_BOOK = './bookstore/bookreducer/DELETE_BOOK';
const BOOK_FAILURE = './bookstore/bookreducer/BOOK_FAILURE';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const apiKey = '7J88ab57HvQlIbDye75B';

const initialState = [];
export const insertBook = (books) => ({
  type: INSERT_BOOK,
  payload: books,
});

export const getBooks = () => async (dispatch) => {
  await axios.get(`${baseUrl}/${apiKey}/books`).then(
    (response) => dispatch(insertBook(response.data)),
    (err) => dispatch({ type: BOOK_FAILURE, err }),
  );
};

export const listBook = (book) => async (dispatch) => {
  await axios
    .post(`${baseUrl}/${apiKey}/books`, book)
    .then(() => dispatch(getBooks()));
};

export const deleteBook = (id) => async (dispatch) => {
  await axios
    .delete(`${baseUrl}/${apiKey}/books/${id}`)
    .then(() => dispatch(getBooks()));
};

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case INSERT_BOOK: {
      const books = Object.entries(action.payload);
      return books.map((book) => ({
        id: book[0],
        ...book[1][0],
      }));
    }
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

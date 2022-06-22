import axios from "axios";

export const getBookService = () => {
  return axios.get(`http://localhost:8080/books`);
}

export const getBooksByTitleService = (title) => {
  return axios.get(`http://localhost:8080/books/${title}`);
}
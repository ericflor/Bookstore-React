import axios from "axios";

const getBookService = () => {
  return axios.get(`http://localhost:8080/books`);
}

export default getBookService;
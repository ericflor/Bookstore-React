import getBookService from "./bookService";

const getBooksAction = () => async (dispatch) => {

  try {

    const books = await getBookService();
    dispatch({ type: "GET_BOOKS", payload: books.data });
    
  } catch (error) {
    console.log(error);
  }
}

export default getBooksAction;
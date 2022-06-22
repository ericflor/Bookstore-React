import getBookService from "./bookService";

const getBooksAction = () => async (dispatch) => {

  try {

    dispatch({
      type: "BOOK_LIST_PENDING"
    })

    const books = await getBookService();
    
    dispatch({ 
      type: "GET_BOOKS", 
      payload: books.data 
    });

    dispatch({
      type: "BOOK_LIST_FULFILLED"
    })

  } 
  
  catch (error) {

    console.log(error);

    dispatch({
      type: "BOOK_LIST_ERROR"
    })
  }
}

export default getBooksAction;
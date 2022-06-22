import { getBookService, getBooksByTitleService } from "./bookService";

export const getBooksByTitle = (title) => async (dispatch) => {

  try {

    dispatch({
      type: "BOOK_LIST_PENDING"
    })

    const books = await getBooksByTitleService(title);

    dispatch({ 
      type: "BOOKS_BY_TITLE", 
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

export const getBooksAction = () => async (dispatch) => {

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
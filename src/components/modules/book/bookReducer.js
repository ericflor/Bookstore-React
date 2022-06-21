export const INITIAL_BOOK_REDUCER_STATE = {
    books: []
}

const bookReducer = (state = INITIAL_BOOK_REDUCER_STATE, action) => {
    switch (action.type) {
        case "GET_BOOKS":{
            return {
                ...state,
                books: action.payload
            }
        }

        default:{
            return state;
        }
    }
}

export default bookReducer;
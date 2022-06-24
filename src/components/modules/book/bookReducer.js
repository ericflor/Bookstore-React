export const INITIAL_BOOK_REDUCER_STATE = {
    books: [],
    promise: {
        isPending: false,
        isFulfilled: false,
        isErrorOcurred: false
    }
}

const bookReducer = (state = INITIAL_BOOK_REDUCER_STATE, action) => {
    switch (action.type) {
        
        case "GET_BOOKS": {
            return {
                ...state,
                books: action.payload
            }
        }

        case "BOOKS_BY_TITLE": {
            return {
                ...state,
                books: action.payload
            }
        }

        case "BOOK_LIST_PENDING": {
            return {
                ...state,
                promise: {isPending: true, isFulfilled: false, isErrorOcurred: false }
            }
        }

        case "BOOK_LIST_ERROR": {
            return {
                ...state,
                promise: {isPending: false, isFulfilled: false, isErrorOcurred: true }
            }
        }

        case "BOOK_LIST_FULFILLED": {
            return {
                ...state,
                promise: {isPending: false, isFulfilled: true, isErrorOcurred: false }
            }
        }

        default:{
            return state;
        }
    }
}

export default bookReducer;
import bookReducer, { INITIAL_BOOK_REDUCER_STATE } from '../bookReducer';

describe('bookReducer', () => {

    it('should return right new state', () => {

        const action = {
            type: 'GET_BOOKS',
            payload: [{ 
                id: 1, 
                title: 'test title', 
                description: 'test description', 
                releaseYear: 2020 
            }]
        }

        const newState = bookReducer(INITIAL_BOOK_REDUCER_STATE, action);
        
        expect(newState).toEqual({

            books: [{
                id: 1,
                title: 'test title',
                description: 'test description',
                releaseYear: 2020
            }],

            promise: {isPending: false, isFulfilled: false, isErrorOcurred: false}
            
        });

    })

    it('should return right new state for BOOKS_BY_TITLE action', async () => {

        const action = {
            type: 'BOOKS_BY_TITLE',
            payload: {
                id: 2, 
                title: 'test title 2',
                description: 'test description 2',
                releaseYear: 2022 
            }
        }

        const newState = bookReducer(INITIAL_BOOK_REDUCER_STATE, action)

        expect(newState).toEqual({

            books: {
                id: 2,
                title: 'test title 2',
                description: 'test description 2',
                releaseYear: 2022
            },

            promise: {isPending: false, isFulfilled: false, isErrorOcurred: false}
            
        });

    })

})
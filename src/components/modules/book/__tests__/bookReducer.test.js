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
            }]
        });

    })

})
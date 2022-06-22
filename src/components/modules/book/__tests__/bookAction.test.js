import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import {getBooksAction, getBooksByTitle} from '../bookAction';

jest.mock('axios');
const middleware = [reduxThunk];
const mockStore = configureStore([reduxThunk]);

describe('BookActions', () => { 

    beforeEach(() => {
        axios.get.mockImplementationOnce(() => Promise.resolve({ data: [{ 
            
            id: 1, 
            title: 'test title',
            description: 'test description',
            releaseYear: 2020
         }] 
        }));
    })

    it('should be able to dispatch success action', async () => {

        const store = mockStore({});

        await store.dispatch(getBooksAction());

        const actions = store.getActions();

        expect(actions.length).toBe(3);

        expect(actions[1]).toEqual({

            type:'GET_BOOKS',
            payload: [{
                id: 1, 
                title: 'test title',
                description: 'test description',
                releaseYear: 2020
            }]
        });

    })

    it('should be able to dispatch book by title action', async () => {

        const store = mockStore();

        await store.dispatch(getBooksByTitle('test title'));

        const actions = store.getActions();

        expect(actions.length).toBe(3);

        expect(actions[1]).toEqual({

            type:'BOOKS_BY_TITLE',
            payload: [{
                id: 1, 
                title: 'test title',
                description: 'test description',
                releaseYear: 2020 
            }]
        })
    })

 });
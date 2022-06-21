import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import getBooksAction from '../bookAction';

jest.mock('axios');
const middleware = [reduxThunk];
const mockStore = configureStore([reduxThunk]);

describe('BookActions', () => { 

    it('should be able to dispatch success action', async () => {

        const store = mockStore({});

        axios.get.mockImplementationOnce(() => Promise.resolve({ data: [{ 
            
            id: 1, 
            title: 'test title',
            description: 'test description',
            releaseYear: 2020
         }] 
        }));

        await store.dispatch(getBooksAction());

        const actions = store.getActions();

        expect(actions.length).toBe(1);

        expect(actions[0]).toEqual({

            type:'GET_BOOKS',
            payload: [{
                id: 1, 
                title: 'test title',
                description: 'test description',
                releaseYear: 2020
            }]
        });

    })

 });
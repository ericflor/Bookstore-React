import userReducer, {USER_INITIAL_STATE} from "../userReducer";

describe('user reducer', () => {

    it('should return new state for login user action', () => {

        const newState = userReducer(USER_INITIAL_STATE, {
            type: 'USER_LOGIN',
            payload: {
                token: 'jwt'
            }
        });

        expect(newState).toEqual({
            ...USER_INITIAL_STATE,
            token: 'jwt'
        })
    })
})
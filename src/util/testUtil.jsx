import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import reduxThunk from "redux-thunk";
import reducers from "/Users/m_2171923/Desktop/UDEMY/REACT_BOOKSTORE/bookstoreclient/src/components/modules";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const renderWithRedux = (

    ui,
    {
        initialState,
        store = createStoreWithMiddleware(reducers, initialState)
    }
) => ({
    ...render(<Provider store={store}>{ui}</Provider>)
})

export default renderWithRedux;
import App from '../App';
import React from 'react';
import renderWithRedux from '../../util/testUtil';

describe("App component", () => {

  it("should render without crashing", () => {

    const {asFragment} = renderWithRedux(<App />, {});

    expect(asFragment()).toMatchSnapshot();

  });
})

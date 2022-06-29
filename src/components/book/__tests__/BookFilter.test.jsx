import React from "react";
import BookFilter from "../BookFilter";
import renderWithRedux from "../../../util/testUtil";
import { fireEvent, screen } from "@testing-library/react";
import { getBooksByTitle } from "../../modules/book/bookAction";


jest.mock("../../modules/book/bookAction");

describe('Book Filter', () => {

    it('should fire getBooksByTitle action on click of search button', () => {

        const {getByLabelText, getByText} = renderWithRedux(<BookFilter></BookFilter>, {})

        const textField = screen.getByLabelText('Enter book title')

        fireEvent.change(textField, {target: {value: 'test-title'}})

        const searchButton = screen.getByText('Search')

        fireEvent.click(searchButton)

        expect(getBooksByTitle).toHaveBeenCalledWith('test-title')

    })

})
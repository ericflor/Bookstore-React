import React from "react";
import { render } from "@testing-library/react";
import BookList from "../BookList";
import BookListItem from "../BookListItem";

jest.mock('../BookListItem');

describe('BookList', () => {

    beforeAll(() => {

        BookListItem.mockImplementation(() => 
            <div>book list item component</div>
        )
    })

    const books = [
        {
            id: 1,
            title: 'test title',
            description: 'test description',
            releaseYear: 2002
        },
        {
            id: 2,
            title: 'test title 2',
            description: 'test description 2',
            releaseYear: 2003
        }
    ]

    it('should render booklist without error', () => {

        render(
            <BookList books={books}></BookList>
        )

        expect(BookListItem).toHaveBeenCalledTimes(2);

        expect(BookListItem).toHaveBeenCalledWith({ book: books[0] }, {});

        expect(BookListItem).toHaveBeenCalledWith({ book: books[1] }, {});

    })

})
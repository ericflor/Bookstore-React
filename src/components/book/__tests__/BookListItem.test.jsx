import React from "react";
import { render } from "@testing-library/react";
import BookListItem from "../BookListItem";
import { screen } from "@testing-library/react";

describe("BookListItem", () => {

    it("should render BookListItem with error", () => {

        const book = 
            {
                id: 1,
                title: 'test title',
                description: 'test description',
                releaseYear: 2002
            }

        const { getByText } = render(
            <BookListItem book={book}></BookListItem>
        );

        expect(screen.getAllByText('test title')).toBeInTheDocument();

        expect(screen.getByText('test description')).toBeInTheDocument();

        expect(screen.getByText('2002')).toBeInTheDocument();
    })

})
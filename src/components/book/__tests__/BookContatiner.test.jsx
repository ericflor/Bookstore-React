import { screen } from "@testing-library/react";
import React from "react";
import renderWithRedux from "../../../util/testUtil";
import BookContainer from "../BookContainer";

describe('BookContainer', () => {

    it('should render without error', () => {

        const { getByText } = renderWithRedux(<BookContainer />, {

            initialState:{
                bookReducer:{
                    books:{
                        id: 1,
                        title: 'test title',
                        description: 'test description',
                        releaseYear: 2002
                    }
                }
            }

        })

        expect(screen.getByText('Will display all books here.')).toBeInTheDocument(); 

    })

})
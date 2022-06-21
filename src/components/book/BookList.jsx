import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import "./Books.css";
import BookListItem from "./BookListItem";

const propTypes = {

    books: PropTypes.arrayOf({

        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        releaseYear: PropTypes.number.isRequired
        
    }).isRequired

}

const BookList = ({books}) => {

    return(

        <Box className="book-list" ml={5}>
            {books.map((book) => 

                <BookListItem book={book} key={book.id}>

                </BookListItem>

            )}
        </Box>
    )

}

BookList.propTypes = propTypes;

export default BookList;
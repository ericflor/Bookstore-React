import React from "react";
import PropTypes from "prop-types";
import "./Books.css";
import { Box, Paper, Avatar, Typography } from "@mui/material";

const propTypes = {

    book: PropTypes.shape({

        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        releaseYear: PropTypes.number.isRequired

    }).isRequired,

}

const BookListItem = ({ book }) => {

    return(

        <Box mb={2}>
            <Paper elevation={2} className="book-list-item-paper">
                <Avatar 
                variant="square" 
                className="book-image" 
                src="https://static.parade.com/wp-content/uploads/2021/11/harry-potter-hogwarts-freebie-ftr.jpeg"
                sx={{ width:180, height:200 }}
                ></Avatar>
                <Box>
                    <Typography variant="h2" mb={1}>
                        {book.title}
                    </Typography>
                    <Typography variant="h5" mb={1}>
                        {book.description}
                    </Typography>
                    <Typography mb={1}>
                        {book.releaseYear}
                    </Typography>
                </Box>
            </Paper>
        </Box>

    );

}

BookListItem.propTypes = propTypes;
export default BookListItem;
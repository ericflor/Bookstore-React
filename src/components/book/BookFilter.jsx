import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import "./Books.css"
import { getBooksByTitle } from "../modules/book/bookAction";

const BookFilter = () => {

  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch(getBooksByTitle);

  const handleSearchChange = (event) => {setSearchText(event.target.value)}

  const handleSearchClick = () => {dispatch(getBooksByTitle(searchText))}

  return (
    <Box className="book-filter">
        <Paper className="book-filter-paper">
            <Typography className="search-text" paddingTop={1} fontSize={25}>Search Book Filters</Typography>
            <Box className="search-text" paddingTop={1}>
              <TextField
                placeholder="Enter book title"
                id="book-search"
                data-testid="book-title-input"
                label="Enter book title"
                variant="outlined"
                value={searchText}
                onChange={handleSearchChange}></TextField>
            </Box>
            <Button onClick={handleSearchClick} 
                variant="contained" 
                color="primary">Search</Button>
        </Paper>
    </Box>
  );
}

export default BookFilter;
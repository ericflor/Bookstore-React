import React, { useEffect } from "react";
import { Box, Skeleton } from "@mui/material";
import BookFilter from "./BookFilter";
import "./Books.css";
import { useDispatch, useSelector } from "react-redux";
import {getBooksAction} from "../modules/book/bookAction";
import { getBooksSelector, getBookPromiseSelector } from "../modules/book/bookSelector";
import BookList from "./BookList";

const BookContainer = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAction());
  }, [dispatch]);

  const books = useSelector(getBooksSelector);

  const bookPromise = useSelector(getBookPromiseSelector);

  return (
    <Box className="book-container">
      <BookFilter />
      <Box className="book-list">
        {
          bookPromise.isPending && (
            <Box ml={5}>
              <Skeleton 
                data-testid="book-loader" 
                variant="rectangular" 
                animation="pulse" 
                width="80%" 
                height={200}></Skeleton>
            </Box>
        )}
        {
          bookPromise.isErrorOcurred && (<div data-testid="book-error-message">Error Message</div>
        )}
        {
          bookPromise.isFulfilled && <BookList books={books}></BookList>
        }
      </Box>
    </Box>
  );
};

export default BookContainer;

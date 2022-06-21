import React, { useEffect } from "react";
import { Box } from "@mui/material";
import BookFilter from "./BookFilter";
import "./Books.css";
import { useDispatch, useSelector } from "react-redux";
import getBooksAction from "../modules/book/bookAction";
import { getBooksSelector } from "../modules/book/bookSelector";

const BookContainer = () => {

  const books = useSelector(getBooksSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAction());
  }, [dispatch]);

  return (
    <Box className="book-container">
      <BookFilter />
      <Box className="book-list">Will display all books here.</Box>
    </Box>
  );
};

export default BookContainer;

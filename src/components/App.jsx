import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import BookContainer from "./book/BookContainer";
import Login from "./user/Login";
import { SnackbarProvider } from "notistack";

const App = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route exact path="/" element={<BookContainer />}></Route>
          </Routes>
        </Layout>
      </Router>
    </SnackbarProvider>
  );
};

export default App;

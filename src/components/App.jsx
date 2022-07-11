import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import BookContainer from "./book/BookContainer";
import Login from "./user/Login";
import { SnackbarProvider } from "notistack";
import Auth from "./Auth/Auth";
import Register from "./user/Register";

const App = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Auth><BookContainer /></Auth>}></Route>
            <Route path="/register" element={<Register/>}></Route>
          </Routes>
        </Layout>
      </Router>
    </SnackbarProvider>
  );
};

export default App;

import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import './Header.css';


const Header = () => { 

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login")
    }

    const handleRegister = () => {
        navigate("/register")
    }

    const handleHome = () => {
        navigate("/")
    }

    return (
        <AppBar position="fixed">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" onClick={handleHome}>
                    Bookstore
                </Typography>
                <Button className="login-link" component="button" variant="body2" onClick={handleLogin}>Login</Button>
                <Button className="register-link" component="button" variant="body2" onClick={handleRegister}>Register</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
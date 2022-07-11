import axios from "axios";

export const login = (email, password) => 
    axios.post(`http://localhost:8080/user/login`, {
        email,
        password,
});

export const register = (user) => 
    axios.post(`http://localhost:8080/user/register`, user);
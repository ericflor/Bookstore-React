import axios from "axios";

export const login = (email, password) => 
    axios.post(`http://localhost:8080/login`, {
        email,
        password,
});
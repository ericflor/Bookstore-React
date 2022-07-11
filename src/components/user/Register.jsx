import { Box, Button, Paper, TextField, Typography, Link } from "@mui/material";
import React from "react";
import * as yup from 'yup';
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getUserRegisterPromise } from "../modules/user/userSelector";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerAction } from "../modules/user/userAction";
import './Register.css';


const validationSchema = yup.object({
    name: yup.string('Enter a username').required('Username is required'),
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup.string('Enter a password').min(8, 'Password needs minimum 8 characters').required('Password is required')
})


const Register = () => {

    const registerPromise = useSelector(getUserRegisterPromise);

    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar();

    const navigate = useNavigate();

    useEffect(() => {

        if(registerPromise.isErrorOcurred){
            enqueueSnackbar('Server error occurred, sorry bro!', {
                variant: 'error'
            })
        }

        else if(registerPromise.isFulfilled){
            enqueueSnackbar('Registration Successful', {
                variant: 'success'
            })
            navigate("/login")
        }
        
    }, [registerPromise, enqueueSnackbar, navigate]);

    const registerForm = useFormik({
        validationSchema,
        initialValues: {
            email: '',
            password: '',
            name: ''
        },
        onSubmit: (values) => {
            dispatch(registerAction(values))
        }
    })

    const handleLogin = () => {
        navigate("/login")
    }

  return (
    <form autoComplete="off" noValidate onSubmit={registerForm.handleSubmit}>
        <Box className="register-box">
        <Paper className="register-paper">
            <Typography variant="h4" className="register">User Registration</Typography>
            <TextField 
                margin="normal"
                name="name"
                id="name"  
                variant="outlined" 
                label="Enter username"
                value={registerForm.values.name}
                onChange={registerForm.handleChange}
                helperText={registerForm.touched.name && registerForm.errors.name}
                error={registerForm.touched.name && Boolean(registerForm.errors.name)} >
            </TextField>
            <TextField 
                margin="normal"
                name="email"
                id="email"  
                variant="outlined" 
                label="Enter email address"
                value={registerForm.values.email}
                onChange={registerForm.handleChange}
                helperText={registerForm.touched.email && registerForm.errors.email}
                error={registerForm.touched.email && Boolean(registerForm.errors.email)} >
            </TextField>
            <TextField 
                margin="normal"
                name="password"
                className="password"
                id="password"  
                variant="outlined" 
                label="Enter password"
                value={registerForm.values.password}
                onChange={registerForm.handleChange}
                helperText={registerForm.touched.password && registerForm.errors.password}
                error={registerForm.touched.password && Boolean(registerForm.errors.password)} >
            </TextField>
            <Button 
                className="register-button"
                margin="normal"
                type="submit" 
                variant="contained" 
                color="primary"
                disabled={registerPromise.isPending}>Register
            </Button>
            <br/>
            <Link component="button" variant="body2" onClick={handleLogin}>Login</Link>
        </Paper>
        </Box>
    </form>
  );
};

export default Register;

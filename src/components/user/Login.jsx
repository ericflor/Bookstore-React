import React from "react";
import { Box, Button, Paper, TextField, Typography, Link } from "@mui/material";
import './Login.css'
import { useFormik } from "formik";
import * as yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../modules/user/userAction";
import { getUserPromise } from "../modules/user/userSelector";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
    email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
    password: yup.string('Enter your password').min(8, 'Password needs minimum 8 characters').required('Password is required')
})

const Login = () => {

    const loginPromise = useSelector(getUserPromise);

    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar();

    const navigate = useNavigate();

    useEffect(() => {

        if(loginPromise.isErrorOcurred){
            enqueueSnackbar('Email or password is incorrect', {
                variant: 'error'
            })
        }

        else if(loginPromise.isFulfilled){
            enqueueSnackbar('Login Successful', {
                variant: 'success'
            })
            navigate("/")
        }
        
    }, [loginPromise, enqueueSnackbar, navigate]);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(loginAction(values.email, values.password))
        }
    })

    const handleRegister = () => {
        navigate("/register")
    }

    return(

        <form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
            <Box className="login-box">
                <Paper className="login-paper">
                    <Typography variant="h4" className="login">
                        Book Store Login
                    </Typography>
                    <TextField
                        margin="normal"
                        name="email" 
                        id="email"
                        className="email"
                        data-testid="email-testid" 
                        label="Enter email address" 
                        variant="outlined" 
                        placeholder="Enter email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        helperText={formik.touched.email && formik.errors.email}
                        error={formik.touched.email && Boolean(formik.errors.email)} />
                    <TextField 
                        margin="normal"
                        name="password" 
                        id="password"
                        className="password"
                        data-testid="password-testid" 
                        label="Enter password" 
                        variant="outlined" 
                        placeholder="Enter password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        helperText={formik.touched.password && formik.errors.password} 
                        error={formik.touched.password && Boolean(formik.errors.password)} />
                    <Button  
                        margin="normal"
                        type="submit" 
                        variant="contained" 
                        color="primary"
                        disabled={loginPromise.isPending}
                    >Login</Button>
                    <br/>
                    <Link component="button" variant="body2" onClick={handleRegister}>Register</Link>
                </Paper>
            </Box>
        </form>
    )
}

export default Login;
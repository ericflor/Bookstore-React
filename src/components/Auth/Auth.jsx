import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserToken } from "../modules/user/userSelector";

const Auth = ({children}) => {

    const navigate = useNavigate();

    const token = useSelector(getUserToken);

    const getView = () => {

        if(!token){

            navigate("/Login")
            
        }

        return children;
    }

    return <>{getView()}</>
}

export default Auth;
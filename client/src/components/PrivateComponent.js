
import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import { getUserFromLocalStorage } from "../utils/localstorage";

export const    PrivateComponent=()=>{

    const auth=localStorage.getItem("user");
    return auth?<Outlet/>:<Navigate to="/login"/>
}


export const PrivateLoginSign = ()=>{
    const auth=localStorage.getItem("user");
    return auth?<Navigate to="/"/>:<Outlet/>
}










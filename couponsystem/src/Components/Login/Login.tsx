import { Button, Icon, MenuItem, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LoginModel from "../../Models/LoginModel";
import { Send } from '@material-ui/icons';
import { Modal } from 'react-responsive-modal';
import "./Login.css";

function Login(): JSX.Element {

    function send(login: LoginModel) {
        console.log("Hello World !");
        console.log(login);
    }

    const types = [
        {
            value: 'ADMINISTRATOR',
            label: 'Administrator',
        },
        {
            value: 'COMPANY',
            label: 'Company',
        },
        {
            value: 'CUSTOMER',
            label: 'Customer',
        },
    ];

    const [type, setType] = React.useState('CUSTOMER');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setType(event.target.value);
    };

    const {register, handleSubmit, formState: { errors }} = useForm<LoginModel>();
    
    return (
    
        
        <div className="Login">
			<h1>Login to Coupon System</h1><br />
            <form onSubmit={handleSubmit(send)}>
                <TextField
                    id="outlined-required"
                    label="Email"
                    type="email"
                    variant="outlined"
                /><br/><br />
                <TextField
                    id="outlined-required"
                    label="Password"
                    type="password"
                    variant="outlined"
                /><br /><br />
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    value={type}
                    onChange={handleChange}
                    helperText="Please select your user type"
                    variant="outlined"
                >
                    {types.map((t) => (
                        <MenuItem key={t.value} value={t.value}>
                        {t.label}
                        </MenuItem>
                    ))}
                </TextField><br /><br />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    endIcon={<Send/>}
                >Login</Button>
            </form>
        </div>
    );
}

export default Login;

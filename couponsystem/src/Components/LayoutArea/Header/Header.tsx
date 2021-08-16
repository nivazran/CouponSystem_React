import Logo from "../Logo/Logo";
import "./Header.css";
import Button from '@material-ui/core/Button';
import Popup from 'reactjs-popup';
import { useState } from "react";
import { Badge } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Login from "../../Login/Login";
import { NavLink } from "react-router-dom";
import { Modal } from 'react-responsive-modal';

// const [count, setCount] = useState(1);


function Header(): JSX.Element {

    return (
        <div className="Header">
			<Logo/>

            <div className="Buttons">
                {/* <Badge color="secondary" badgeContent={count}>
                    <ShoppingCartIcon />
                </Badge> */}
                {/* <Popup trigger={<Button variant="outlined" color="primary">Login</Button>} position="bottom left">
                    <Login/>
                </Popup> */}

                <Button variant="outlined" color="primary">Login</Button>
                
                {/* handleClose={toggleLogin}; */}
                
            </div>
        </div>
    );
}

export default Header;

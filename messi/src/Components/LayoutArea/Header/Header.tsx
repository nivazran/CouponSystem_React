import "./Header.css";
import React, { useEffect, useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from "@material-ui/core/IconButton";
import { Slide } from "@material-ui/core";
import {Link as Scroll} from 'react-scroll';
import Logo from "../../../Assets/Images/Messi-Logo.png"

function Header(): JSX.Element {
    const [checked,setChecked] = useState(false);
    useEffect(() => {
        setChecked(true)
    }, [])

    return (
        // <Collapse in={checked}
        // {...(checked ? {timeout: 5000} : {})}
        // // collapsedHeight={50}
        // >
        <div className="Header" id="header">
            <img src={Logo} alt="" />
			<Slide direction="down" in={checked}
            {...(checked ? {timeout : 1500} : {})}
            mountOnEnter unmountOnExit>
            <div className="container">
                <h1>
                    Welcome to <br/>
                    <span className="playerName">Lionel Messi</span><br />
                    Website
                </h1>
                <Scroll to="main" smooth={true}>
                    <IconButton>
                        <ExpandMoreIcon className="goDown"/>
                    </IconButton>
                </Scroll>
            </div>
            </Slide>
        </div>
    );
}

export default Header;

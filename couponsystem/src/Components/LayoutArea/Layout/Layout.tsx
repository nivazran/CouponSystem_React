import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Card from "../../CouponsArea/Card/Card";
import CouponCards from "../../CouponsArea/CouponCards/CouponCards";
import Login from "../../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className='application'>
        <BrowserRouter>
            <header>
                <Header/>
            </header>
            <aside>
                <Menu/>
            </aside>
            <main>
                <Routing/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </BrowserRouter>
    </div>
    );
}

export default Layout;

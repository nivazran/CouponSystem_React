import Main from "../../HomeArea/Main/Main";
import Footer from "../Footer/Footer"
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline } from "@material-ui/core";
import bgImg from '../../../Assets/Images/Messi-bg.jpg'
import "./Layout.css"
import { useLayoutEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "../Routing/Routing";

// const useStyles = makeStyles((theme) => ({
//     application: {
//         minHeight: '100vh',
//         backgroundImage: `url(${process.env.PUBLIC_URL + '/Assets/Images/Messi-bg.jpg'})`,
//     }
// }))


export function useWindowsPosition(id: string) {
    const [animation, setAnimiation] = useState(false);

    useLayoutEffect(() => {
        function updatePosition() {
            const offsetSetHeight = window.document.getElementById(id)?.offsetHeight;
            if (offsetSetHeight != null && window.pageYOffset > offsetSetHeight * 0.7) {
                setAnimiation(true);
            }
        }
        
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, [id]);
    
    return animation;
}

export function Layout():JSX.Element{
    // const classes = useStyles();
    return (
            <div className='application'>
                <BrowserRouter>
                    <CssBaseline/>
                    <header>
                        <Header/>
                    </header>
                    <aside>
                        <Menu/>
                    </aside>
                    <main>
                        {/* <Main/> */}
                        <Routing/>
                    </main>
                    <footer>
                        <Footer/>
                    </footer>
                </BrowserRouter>
            </div>
    );
}

import { Modal } from "@material-ui/core";
import { Redirect, Route, Switch } from "react-router-dom";
import CouponCards from "../../CouponsArea/CouponCards/CouponCards";
import Login from "../../Login/Login";
import Header from "../Header/Header";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Switch>
                <Route path='/home' component={CouponCards} exact />
                <Route path='/login' component={Login} exact />
                {/* <Route path='/home' component={Main} exact />
                <Route path='/home' component={Main} exact />
                <Route path='/home' component={Main} exact /> */}
                <Redirect from='/' to='home' exact />
                {/* <Route component={Page404}/> */}

            </Switch>
        </div>
    );
}

export default Routing;

import { Redirect, Route, Switch } from "react-router-dom";
import Main from "../../HomeArea/Main/Main";
import AllClubs from "../../MenuArea/AllClubs/AllClubs";
import AllGoals from "../../MenuArea/AllGoals/AllGoals";
import AllTitles from "../../MenuArea/AllTitles/AllTitles";
import Page404 from "../../SharedArea/Page404/Page404";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Switch>
			    <Route path='/home' component={Main} exact/>
                <Route path='/goals' component={AllGoals} exact/>
                <Route path='/titles' component={AllTitles} exact/>
                <Route path='/clubs' component={AllClubs} exact/>
                <Redirect from='/' to='home' exact/>
                <Route component={Page404}/> {/* Last */}
            </Switch>
        </div>
    );
}

export default Routing;

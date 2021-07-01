import { useWindowsPosition } from "../../LayoutArea/Layout/Layout";
import Clubs from "../Clubs/Clubs";
import Goals from "../Goals/Goals";
import Sales from "../Sales/Sales";
import Titles from "../Titles/Titles";
import Workout from "../Workout/Workout";
import "./Main.css";

function Main(): JSX.Element {
    const checked = useWindowsPosition('header');
    const checked2 = useWindowsPosition('1stLine');
    return (
        <div className="Main" id='main'>
            <table>
            <tbody>

            <tr id='1stLine'>
			    <td>
                    {/* interpolation */}
                    <Titles checked={checked}/>
                </td>
            
            {/* Conditional Rendering */}
            {/* <Workout/> */}
                <td>
                    {/* Displaying List */}
                    <Clubs checked={checked}/>
                </td>
            </tr>

            <tr>
                <td>
                    {/* Props */}
                    <Goals checked={checked2}/>
                    {/* <Goals team="Barcelona B" goals={67}/> */}
                </td>

                <td>
                    {/* Props */}
                    <Sales category="shows" percent={20} checked={checked2}/>
                    {/* <Sales percent={20}/> */}
                </td>
            </tr>
            </tbody>
            </table>
        </div>
    );
}

export default Main;

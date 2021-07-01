import clubsImg from '../../../Assets/Images/Messi-clubs.jpg';
import Collapse from '@material-ui/core/Collapse';

import "./Clubs.css";

interface ClubProps {
    checked:boolean;
}

function Clubs(props: ClubProps): JSX.Element {
    const teams = [
        {"id":1, "name":'Newell\'s Old Boys', "years": '1990-1995'},
        {"id":2, "name":'Barcelona Youth'},
        {"id":3, "name":'Barcelona C'},
        {"id":4, "name":'Barcelona B'},
        {"id":5, "name":'Barcelona'},
    ];
    return (
        <Collapse in={props.checked}
        {...(props.checked ? { timeout: 1000 } : {})}>
        <div className="Clubs Box">
            <img className="Clubs BoxImage" src={clubsImg} alt="" />
            {/* Step 1 : Hard Coded */}
            {/* <span>Newell's Old Boys</span>
            <span>    |   </span>
            <span>Barcelona Youth</span>
            <span>    |   </span>
            <span>Barcelona C</span>
            <span>    |   </span>
            <span>Barcelona B</span>
            <span>    |   </span>
        <span>Barcelona</span> */}

            {/* Step 2 : Reading from an array */}
            {/* {teams.map(team=><span>{team},</span>)} */}

            {/* Step 3 : Reading from an array of Objects */}
            {/* {teams.map(team=><span>&nbsp;{team.name}&nbsp;|</span>)} */}

            {/* Step 4 : Reading from an array of Objects and provide unique prop. id for React DOM */}
            <ul className="Clubs BoxInformation">
                <h2>Clubs</h2>
                {teams.map(team =><li key={team.id}>{team.name}</li>)}
            </ul>

        </div>
        </Collapse>
    );
}

export default Clubs;

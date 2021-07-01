import "./Goals.css";
import goalsImg from '../../../Assets/Images/Messi-goals.jpg'
import Collapse from '@material-ui/core/Collapse';


interface GoalsProps {
    checked:boolean;
}

function Goals(props: GoalsProps): JSX.Element {

    const goals = [
        {"id":1, "competition":'La Liga', "goals": 474},
        {"id":2, "competition":'Copa Del Rey', "goals": 56},
        {"id":3, "competition":'Spanish Super Cup', "goals": 14},
        {"id":4, "competition":'Champions League', "goals": 120},
        {"id":5, "competition":'Uefa Super Cup', "goals": 3},
        {"id":5, "competition":'Uefa Clubs World Cup', "goals": 5},
    ];

    return (
        <Collapse in={props.checked}
        {...(props.checked ? { timeout: 1000 } : {})}>
        <div className="Goals Box">
            <img className="Goals BoxImage" src={goalsImg} alt="" />
			<div className="Goals BoxInformation">
                <h2>Goals</h2>
                <ul>
                    {goals.map(goals =><li key={goals.id}>{goals.goals} goals on {goals.competition}</li>)}
                </ul>
            </div>
        </div>
        </Collapse>
    );
}

export default Goals;

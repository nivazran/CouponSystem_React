import "./Titles.css";
import Collapse from '@material-ui/core/Collapse';
import TitleImg from '../../../Assets/Images/Messi-titles.jpg'

interface TotalProps {
    checked:boolean;
}

function Total(props:TotalProps): JSX.Element {

    const titles = [
        {"id":1, "name":'La Liga', "titles": 10},
        {"id":2, "name":'Copa Del Rey', "titles": 7},
        {"id":3, "name":'Spanish Super Cup', "titles": 7},
        {"id":4, "name":'Uefa Champions League', "titles": 4},
        {"id":5, "name":'Uefa Super Cup', "titles": 3},
        {"id":5, "name":'Uefa Clubs World Cup', "titles": 3},
    ];

    return (
        <Collapse in={props.checked}
        {...(props.checked ? { timeout: 1500 } : {})}>
        <div className="Titles Box">
            <img className="Titles BoxImage" src={TitleImg} alt="" />
            <div className="Titles BoxInformation">
			<h2>Titles</h2>
            <ul>
                {titles.map(title =><li key={title.id}>{title.titles} Titles of {title.name}</li>)}
            </ul>
            </div>
        </div>
        </Collapse>
    );
}

export default Total;

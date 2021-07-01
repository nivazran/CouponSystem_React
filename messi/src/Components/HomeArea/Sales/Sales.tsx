import "./Sales.css";
import Collapse from '@material-ui/core/Collapse';
import SaleImg from '../../../Assets/Images/Messi-sale.jpg'

interface SalesProps {
    category?:string;
    percent:number;
    checked:boolean;
}

function Sales(props:SalesProps): JSX.Element {
    return (
        <Collapse in={props.checked}
        {...(props.checked ? { timeout: 1000 } : {})}>
        <div className="Sales Box">
            <img className="Sales BoxImage" src={SaleImg} alt="" />
            <div className="Sales BoxInformation">
			<h2>Sale</h2>
            <span> Only Now ! <br/> all {props.category || 'items'} with discount of {props.percent}% ! </span>
            </div>
        </div>
        </Collapse>
    );
}

export default Sales;

import "./Menu.css";
import restaurants from '../../../Assets/Images/restaurants.jpg'
import vacations from '../../../Assets/Images/holiday.jpg'
import sports from '../../../Assets/Images/sports.jpg'
import homestyle from '../../../Assets/Images/homestyle.jpg'

function Menu(): JSX.Element {
    
    const types = [
        {"id":1, "name":'Restaurants', "image": restaurants},
        {"id":2, "name":'Vacations', "image": vacations},
        {"id":3, "name":'Sports', "image": sports},
        {"id":4, "name":'Home Style', "image": homestyle}
    ];
    
    return (
        <div className="Menu">
			{types.map(type =>
                <div className="MenuBox" key={type.id}>
                    <img src={type.image} alt="" />
                    <p className="title">{type.name}</p>
                </div>)}
        </div>
    );
}

export default Menu;

import { Component, useState } from "react";
import { AddShoppingCart, Clear, Done, InfoOutlined } from '@material-ui/icons/';
import "./Card.css";
import CouponModel from "../../../Models/CouponModel";
import { Badge } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

interface CardProps{
    coupon: CouponModel;
    // id?:number;
    // category?:string;
    // title?: string;
    // description? : string;
    // startdate? : string;
    // enddate? : string;
    // amount? : number;
    // price? : number;
    // image? : string;
}

// class Card extends Component<CardProps> {

//     public constructor(props: CardProps) {
//         super(props);
//     }

    function Card(props:CardProps): JSX.Element {
    // function Card(): JSX.Element {

        const [isActive, setActive] = useState(false);
        // const [count, setCount] = useState(1);

        const handleToggle = () => {
            setActive(!isActive);
            // if (!isActive) {
            //     setCount(count + 1);
            // } else {
            //     setCount(count - 1)
            // }
        };

        return (
            <div className="wrapper">
                <div className="container">
                    <div className="top"><img src={props.coupon.image} alt="" /></div>
                    <div className={isActive ? "bottom clicked" : "bottom"}>
                    {/* <div className={'bottom ${isActive ? "clicked" : ""}'}> */}
                        <div className="left">
                            <div className="details">
                                {/* <h1>{this.props.coupon.title}</h1>
                                <p>{this.props.coupon.price}</p> */}
                                <h1>{props.coupon.title}</h1>
                                <p>{props.coupon.price} NIS</p>
                            </div>
                            <div className="buy" onClick={handleToggle}><AddShoppingCart className="buyIcon"/></div>
                            {/* <div className="buy"><i className="material-icons">add_shopping_cart</i></div> */}
                        </div>
                        <div className="right">
                            <div className="done"><Done className="doneIcon"/></div>
                            {/* <div className="done"><i className="material-icons">done</i></div> */}
                            <div className="details">
                                <h1>{props.coupon.title}</h1>
                                <p>Added to your cart</p>
                            </div>
                            <div className="remove" onClick={handleToggle}><Clear className="removeIcon"/></div>
                            {/* <div className="remove"><i className="material-icons">clear</i></div> */}
                        </div>
                    </div>
                </div>
                <div className="inside">
                    <div className="info"><InfoOutlined className="infoIcon"/></div>
                    <div className="contents">
                        <table>
                            <tr>
                                <th>Width</th>
                                <th>Height</th>
                            </tr>
                            <tr>
                                <td>3000mm</td>
                                <td>4000mm</td>
                            </tr>
                            <tr>
                                <th>Something</th>
                                <th>Something</th>
                            </tr>
                            <tr>
                                <td>200mm</td>
                                <td>200mm</td>
                            </tr>
                            <tr>
                                <th>Something</th>
                                <th>Something</th>
                            </tr>
                            <tr>
                                <td>200mm</td>
                                <td>200mm</td>
                            </tr>
                            <tr>
                                <th>Something</th>
                                <th>Something</th>
                            </tr>
                            <tr>
                                <td>200mm</td>
                                <td>200mm</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

export default Card;

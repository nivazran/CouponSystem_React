import { Component } from "react";
import axios from 'axios';
import CouponModel from "../../../Models/CouponModel";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import "./CouponCards.css";
import Card from "../Card/Card";
import { CouponsAppState, couponsDownloadedAction } from "../../../Redux/CouponsState";

interface CouponCardsState {
	coupons: CouponModel[];
}

class CouponCards extends Component<{}, CouponCardsState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
			  coupons: store.getState().couponState.coupons
        };
    }

    public async componentDidMount() {
        if (store.getState().couponState.coupons.length == 0) {
          try {
            const response = await (await axios.get<CouponModel[]>(globals.urls.coupons));
    
            store.getState().couponState.coupons = response.data; //update global state
    
            this.setState({ coupons: response.data }); //update local state
          } catch (err) {
            alert(err.message);
          }
        }
      }

    public render(): JSX.Element {
        return (
            <div className="CouponCards">
              {this.state.coupons.map(c=><Card key={c.id} coupon={c}/>)}
            </div>
        );
    }
}

export default CouponCards;

// import CouponModel from "../../../Models/CouponModel";
// import Card from "../Card/Card";
// import "./CouponCards.css";

// function CouponCards(): JSX.Element {
//     return (
// 		<div className="Cards">
//       <table>
//         <tr>
//           <td>
//             {/* <Card id={1} category="SPORTS" title="El-Classico" description="aaa" startdate="2021-01-01" enddate="2021-06-01" amount={10} price={30} image="https://e0.365dm.com/20/10/768x432/skysports-real-madrid-barcelona_5146542.jpg?20201022165118"></Card> */}
//           </td>
//           <td>
//             {/* <Card id={2} category="VACATION" title="Royal Beach" description="aaa" startdate="2021-01-01" enddate="2021-06-01" amount={10} price={30} image="https://www.isrotel.co.il/commerce/content/images/thumbs/0005095.jpeg"/> */}
//           </td>
//           <td>
//             {/* <Card id={3} category="RESTAURANT" title="Ya-Pan" description="aaa" startdate="2021-01-01" enddate="2021-06-01" amount={10} price={30} image="https://static.wixstatic.com/media/2b1d6c_f84a1556bfac489891c053fca74d2694~mv2.jpeg/v1/fill/w_1000,h_1000,al_c,q_90,usm_0.66_1.00_0.01/2b1d6c_f84a1556bfac489891c053fca74d2694~mv2.jpeg"/> */}
//           </td>
//         </tr>
//         <tr>
//           <td>
//             {/* <Card id={4} category="HOMESTYLE" title="Table" description="aaa" startdate="2021-01-01" enddate="2021-06-01" amount={10} price={30} image="https://www.kaza.co.il/wp-content/uploads/2020/08/9305a8caeb4a74094612c1db47ff2367-1.jpg"/> */}
//           </td>
//           <td>
//             {/* <Card id={5} category="VACATION" title="Dead Sea" description="aaa" startdate="2021-01-01" enddate="2021-06-01" amount={10} price={30} image="https://img.haarets.co.il/img/1.9670289/4028138673.jpg?precrop=1530,1533,x6,y11&height=1200&width=1200"/> */}
//           </td>
//           <td>
//             {/* <Card id={6} category="HOMESTYLE" title="Leather Sofa" description="aaa" startdate="2021-01-01" enddate="2021-06-01" amount={10} price={30} image="https://divanicenter.co.il/wp-content/uploads/2020/12/wsi-imageoptim-sweet.810.540.5-450x300.jpg"/> */}
//           </td>
//         </tr>
//         <tr>
//           <td>
//             {/* <Card id={7} category="RESTAURANT" title="Itzik Ha'Gadol" description="aaa" startdate="2021-01-01" enddate="2021-06-01" amount={10} price={30} image="https://timeoutil-static.s3.eu-central-1.amazonaws.com/media/2018/03/sizes/7777_wo_500_327.png"/> */}
//           </td>
//         </tr>
//       </table>
//     </div>
//     );
// }

// export default CouponCards;

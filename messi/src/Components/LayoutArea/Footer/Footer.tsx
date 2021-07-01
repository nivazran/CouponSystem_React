import "./Footer.css";
import Uefa from '../../../Assets/Images/uefa.png'
import Barcelona from '../../../Assets/Images/Barcelona.png'
import Wikipedia from '../../../Assets/Images/Wikipedia.png'

function showSponser() {
    alert("Adidas");
}

function Footer(): JSX.Element {
    return (
        <div className="Footer">
			<p>All rights reserved to Messi's <span onClick={showSponser}>Sponser</span></p>
            <p>For More Stats</p>
            <p>
                <a target="_blank" href="https://www.fcbarcelona.com/en/football/first-team/players/4974/lionel-messi" className="links"><img src={Barcelona} alt="Barcelona" /></a>
                <a target="_blank" href="https://en.wikipedia.org/wiki/Lionel_Messi" className="links"><img src={Wikipedia} alt="Wikipedia" /></a>
            </p>
        </div>
    );
}

export default Footer;

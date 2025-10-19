import airForce from './assets/airforcesymbol.svg';
import kanaf from "./assets/kanaf.svg";

const LandingPage = () => {
    return ( 
        <div className="header">
            <img className= "logo" id= "iaf-logo" src={airForce} alt="Air Force Symbol" />
            <img className= "logo" id= "kanaf-logo" src={kanaf} alt="kanaf symbol" />

        </div>
     );
}
 
export default LandingPage;
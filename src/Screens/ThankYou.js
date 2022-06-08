import { Link } from "react-router-dom";
import Copyrite from "../Components/Copyrite";

const ThankYou = () => {
    return ( 
        <div className="main-body d-flex flex-column min-vh-100">
        <div className="mb-5 pb-3">
             {/* <!-- LOGO --> */}
             <div className="text-center">
                <img className="logo-image" src={process.env.PUBLIC_URL+"/logo.png"} alt="Ghana customer service logo"/>
            </div>
            {/* <!-- END LOGO --> */}
            {/* <!-- SECTOR HEAD --> */}
            <div className="main-body-head animate__animated animate__bounceIn">
                <div className="sector-body pl-4 bg-white pt-4 pb-2 text-center">
                    <h4>GHANA CUSTOMER SERVICE INDEX SURVEY 2022</h4>
                    <div className='mt-4 pt-4 border-top text-success'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 icon-svg text-success" fill="none" viewBox="0 0 24 24" stroke="green" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></span>
                        <h2 className='primary-text'>Survey Completed</h2>
                        <p className='text-secondary text-left mr-3 '>Thank you for taking part in the Ghana Customer Service Index Survey 2022. For more information please email <a href="mailto:info@ghanacsi.org">info@ghanacsi.org</a></p>
                    </div>
                </div>
                <div className="mt-3">
                <Link  to='/' className="mybtn bg-white rounded p-2 pl-3 pr-3 mr-2 ">
                   Back to Homepage
                </Link>
                </div>
            </div>
            {/* <!-- END SECTOR HEAD --> */}
        </div>  

        <Copyrite></Copyrite>

      </div>
     );
}
 
export default ThankYou;


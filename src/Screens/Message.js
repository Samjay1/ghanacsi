import { Link } from "react-router-dom";
import Copyrite from "../Components/Copyrite";

const Message = ()=>{
    return ( 
        <div className="main-body d-flex flex-column min-vh-100">
        <div className="mb-5 pb-3">
             {/* <!-- LOGO --> */}
             <div className="text-center">
                <img className="logo-image" src="logo.png" alt="Nigeria customer service logo"/>
            </div>
            {/* <!-- END LOGO --> */}
            {/* <!-- SECTOR HEAD --> */}
            <div className="main-body-head">
                <div className="sector-body pl-4 bg-white pt-4 pb-2 text-center">
                    <h4>NIGERIA CUSTOMER SERVICE INDEX SURVEY 2022</h4>
                    <div className='mt-4 pt-4 border-top text-success'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 icon-svg " fill="red" viewBox="0 0 24 24" stroke="#bf0000" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                        <h2 className='text-danger'>Something went wrong</h2>
                        <p className='text-secondary text-center mr-3'>Click the button below to start the survey</p>
                    </div>
                </div>
                
            </div>
            {/* <!-- END SECTOR HEAD --> */}
            <div className="mt-3">
                <Link  to='/' className="mybtn bg-white rounded p-2 pl-3 pr-3 mr-2 ">
                   Go to Survey
                </Link>
                </div>
        </div>  

        <Copyrite></Copyrite>

      </div>
     );
}

export default Message;
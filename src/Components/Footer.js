// import { useState } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Copyrite from "./Copyrite";

const Footer  = ({onTap, button_state,title, load, page}) => {

    let navigate = useNavigate()
    let button ;
    if (button_state==='true'){
       button =  <button  onClick={() => navigate(-1)} className="mybtn bg-white rounded p-2 pl-3 pr-3 mr-2">
                   Back
                </button>
    };

    const onClearBtn = ()=>{
        setShowCss('show');
        console.log("clearbtn clicked", showCss)
        
    }

    let [showCss, setShowCss] = useState('none');
    const closebtn = ()=>{
        setShowCss('none');
    }

    return (
        <>
             <div>
                  {/* <!-- NAVIGATOR AND PROGRESS --> */}
                    <div className="d-flex justify-content-between mt-3 mb-5 pb-3">
                        <div>
                            {button}
                            <button onClick={()=>{onTap()}}  className="mybtn bg-white rounded p-2 pl-3 pr-3">
                            {title}
                            </button>
                        </div>

                        <div className="d-flex flex-row  align-items-center">
                            <div className="progress">
                                <div className="progress-inner" style={{width: load}}></div>
                            </div>
                            <div className="ml-3 small">Page {page} of 8</div>
                            <div> <button className="primary-text btn ml-2" onClick={onClearBtn}>Clear form</button> </div>
                        </div> 

                    </div>
                    {/* <!-- END NAVIGATOR AND PROGRESS --> */}

                    <Copyrite></Copyrite>
                    <div id="modal" className='modal'  style={showCss==='show' ? {display:'block'}: {display:'none'}}>
                        {/* <!-- Modal content --> */}
                        <div className="modal-content">
                            <span className="float-left ml-0" id="close" onClick={closebtn}>×</span> 
                            <div className="modal-message  pt-3 pb-3 mb-3 rounded">
                                <div className="h5 font-weight-bold text-center pt-1 pb-1">
                                    <span >
                                        Are you sure you want to clear form?
                                    </span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <button className="btn btn-danger" onClick={closebtn}>Cancel</button>
                                </div>
                                <div className="col-md text-right">
                                    <a className="btn primary-btn pl-3 pr-3" href="/">Clear</a>
                                </div>
                            </div>
                        </div>
                    </div>
             </div>
        </>
      );
}
 

export default Footer;
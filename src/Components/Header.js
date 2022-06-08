import './logo.png';
const Header  = () => {
    return (
        <>
             {/* <!-- LOGO --> */}
             <div className="text-center animate__animated animate__flipInY">
                <img className="logo-image" src="logo.png" alt="Ghana customer service logo"/>
            </div>
            {/* <!-- END LOGO --> */}
            {/* <!-- SECTOR HEAD --> */}
            <div className="main-body-head animate__animated animate__flipInX">
                <div className="sector-body pl-4 bg-white pt-4 pb-2">
                    <h2>GHANA CUSTOMER SERVICE INDEX SURVEY 2022</h2>
                <p>Multi-sector Survey on Customer Service Experience in Ghana</p>
                </div>
            </div>
            {/* <!-- END SECTOR HEAD --> */}
        </>
      );
}
 

export default Header;
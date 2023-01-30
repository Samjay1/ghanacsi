import './logo.png';
const Header  = () => {
    var year = new Date().getFullYear();
    console.log('year :>> ', year);
    return (
        <>
             {/* <!-- LOGO --> */}
             <div className="text-center animate__animated animate__flipInY">
                <img className="logo-image" src={process.env.PUBLIC_URL+"/logo.png"} alt="NIGERIA customer service logo"/>
            </div>
            {/* <!-- END LOGO --> */}
            {/* <!-- SECTOR HEAD --> */}
            <div className="main-body-head animate__animated animate__flipInX">
                <div className="shadow-lg rounded-lg pl-4 bg-white pt-4 pb-2">
                    <h2>NIGERIA CUSTOMER SERVICE INDEX SURVEY {year} </h2>
                <p>Multi-sector Survey on Customer Service Experience in Nigeria</p>
                </div>
            </div>
           
            {/* <!-- END SECTOR HEAD --> */}
        </>
      );
}
 

export default Header;
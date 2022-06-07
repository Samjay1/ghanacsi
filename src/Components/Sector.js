const Sector = ({sector_description,sector_title})=>{
    let checker = sector_description===undefined ? 0 : sector_description.length
   
    return(
        <>
            {/* <!-- SUB-SECTOR TITLE --> */}
            <div className="sector mt-2">
                <div className="sector-head pl-4 d-flex ">
                    <p className={checker!==0 ? "h5 text-uppercase d-flex mt-2 text-white":  "h5 text-uppercase d-flex mt-2 text-white pt-2" }>{sector_title}</p>
                </div>

                <div className={checker!==0 ?"sector-body": "sector-body sector-none" }>
                    <div className="pl-4 pr-4 mt-2">
                        <p className="small text-justify">{sector_description} </p>
                    </div> 
                </div>
            </div>
            {/* <!-- END SUB-SECTOR TITLE --> */}
        </>
    );
}

export default Sector;
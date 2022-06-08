import Header from "../Components/Header";
const ErrorPage = ()=>{
    return (
        <div className="main-body d-flex flex-column min-vh-100 text-center">
            <Header></Header>
            <p className="display-2 font-weight-bold mt-5 animate__animated animate__backInLeft ">Not found</p>
            <p className="animate__animated animate__backInRight ">Use this link to visit the <a className="primary-text" href="https://ghanacsi.org/">Hompage</a></p>
        </div>
    )
}

export default ErrorPage;
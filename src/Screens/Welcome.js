import Header from '../Components/Header'
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {


  const navigate = useNavigate();
  // error handling click event
  const onTapped = ()=>{
      navigate('/survey/question1')
  }
    return ( 
        <div className="main-body">
        <Header></Header>
        <Footer onTap={onTapped} title={"Begin"} button_state='false' load={'12%'} page={1}></Footer>
      </div>
     );
}
 
export default Welcome;


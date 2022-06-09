import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sector from '../Components/Sector';
import CustomRadio from '../Components/CustomRadio';
import { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { useGlobalState } from '../Networks/QuestionState';

const QuestionPage5 = () => {
  const [sample] = useGlobalState('sample');
  console.log('sample 5 :>> ', sample);

  let location = useLocation();

  let [ans22, setAns22] = useState([]);

  let Page2Answers = {
    ans22
  }
  console.log('Question Page5',Page2Answers)
  // console.log('GcsiPageAnswers',location.state.GcsiPageAnswers)
                      
  // Error states for each question: false - no error and true - error present
  let [error22, setError22] = useState(false);

  const data= sample
  let question
  question = data.map((data)=> { 
    // let selected_company = 'ABSA BANK';//SECTOR FROM SESSION FROM PREVIOUS PAGE'ANSWER
    let id = data.id;

    if(id===22){
      let question = data.question
      let answers = data.answers
          return <CustomRadio
                    onValueChange = {setAns22} 
                    errorState = {error22}
                    question={question} 
                    answers={answers} 
                    sameName={id}
                    key={id}>
                </CustomRadio>
                
    }else{
      // console.log('data else:>> NAN');
      return null;
    }
  });

  
  const navigate = useNavigate();
  // error handling click event
  const onTapped = ()=>{
    if(ans22.length !== 0 && ans22.value === 'Referral' ? true: false){
      let GcsiPageAnswers = {...location.state.GcsiPageAnswers, q22: ans22.value}
      navigate(`${process.env.PUBLIC_URL}/question6`, {state:{GcsiPageAnswers}})
    }else if(ans22.length !== 0 && ans22.value !== 'Referral' ? true: false){
      let GcsiPageAnswers = {...location.state.GcsiPageAnswers, q22: ans22.value}
      navigate(`${process.env.PUBLIC_URL}/question7`, {state:{GcsiPageAnswers}})
    }
    else{
      setError22(true)
    }
  }

  const sector_title = 'AWARENESS OF GCSI SURVEY'
    return ( 
        <div className="main-body">
        <Header key={'header'}></Header>
        <Sector sector_title={sector_title} key={'sector'}></Sector>
        {question}
        
        
        <Footer key={'footer'} title={'Next'} onTap={onTapped}  button_state='true' load={'72%'} page={6}></Footer>
      </div>
     );
}
 
export default QuestionPage5;


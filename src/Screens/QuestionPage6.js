import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sector from '../Components/Sector';
import { useState } from 'react';
import { useNavigate, useLocation  } from "react-router-dom";
import CustomRadio from '../Components/CustomRadio';
import { useGlobalState } from '../Networks/QuestionState';

const QuestionPage6 = () => {
  const [sample] = useGlobalState('sample');
  console.log('sample 6 :>> ', sample);

  let location = useLocation();

  let [ans23, setAns23] = useState([]);

  let Page2Answers = {
    ans23
  }
  console.log('Question Page6',Page2Answers)
  // console.log('GcsiPageAnswers',location.state.GcsiPageAnswers)
                      
  // Error states for each question: false - no error and true - error present
  let [error23, setError23] = useState();

  const data= sample
  let question
  question = data.map((data)=> { 
    // let selected_company = 'ABSA BANK';//SECTOR FROM SESSION FROM PREVIOUS PAGE'ANSWER
    let id = data.id;

    if(id===23){
      let question = data.question
      let answers = data.answers
          return <CustomRadio 
                    onValueChange = {setAns23} 
                    errorState = {error23}
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

  
  // error handling click event
  const onTapped = ()=>{
    if(ans23.length !== 0 ? true: false){
      let GcsiPageAnswers = {...location.state.GcsiPageAnswers, q23: ans23.value}
      navigate('/question7', {state:{GcsiPageAnswers}})
    }else{
      setError23(true)
    }
  }

  const sector_title = `ABOUT REFERRAL`
  const navigate = useNavigate();
    return ( 
        <div className="main-body">
        <Header key={'header'}></Header>
        <Sector sector_title={sector_title}  key={'sector'}></Sector>
        {question}
        
        <Footer key={'footer'} title={'Next'} onTap={()=>{onTapped() }}  button_state='true' load={'84%'} page={7}></Footer>
      </div>
     );
}
 
export default QuestionPage6;


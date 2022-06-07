import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sector from '../Components/Sector';
import Radio from '../Components/Radio';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGlobalState } from '../Networks/QuestionState';

const QuestionPage7 = () => {
  const [sample] = useGlobalState('sample');
  console.log('sample 7 :>> ', sample);

  let location = useLocation();

  let [ans24, setAns24] = useState([]);

  let Page2Answers = {
    ans24
  }
  console.log('Question Page7',Page2Answers)
  // console.log('GcsiPageAnswers',location.state.GcsiPageAnswers)
                      
  // Error states for each question: false - no error and true - error present
  let [error24, setError24] = useState(false);

  const data= sample
  let question
  question = data.map((data)=> { 
    // let selected_company = 'ABSA BANK';//SECTOR FROM SESSION FROM PREVIOUS PAGE'ANSWER
    let id = data.id;

    if(id===24){
      let question = data.question
      let answers = data.answers
          return <Radio 
                    onValueChange = {setAns24} 
                    errorState = {error24}
                    question={question} 
                    answers={answers} 
                    sameName={id}
                    key={id}>
                </Radio>
    }else{
      // console.log('data else:>> NAN');
      return null;
    }
  });

  const navigate = useNavigate();
  // error handling click event
  const onTapped = ()=>{
    if(ans24.length !== 0 ? true: false){
      let GcsiPageAnswers = {...location.state.GcsiPageAnswers, q24: ans24.value}
      if(ans24.value ==="No"){
        console.log('POSTING DATA TO SERVER:',GcsiPageAnswers)
        navigate('/final')
      }else{
        console.log('POSTING DATA TO SERVER:',GcsiPageAnswers)
        console.log(' OPT TO RETAKE:')
        navigate('/')
      }
    }else{
      setError24(true)
    }
  }

  const sector_description = `Select YES to take survey for another sector, or NO to complete demographics section and EXIT survey.`
  const sector_title = 'RATE ANOTHER SECTOR?'
    return ( 
        <div className="main-body">
        <Header key={'header'}></Header>
        <Sector sector_description={sector_description} sector_title={sector_title} key={'sector'}></Sector>
        {question}
        
        
        <Footer key={'footer'} title={ans24.value==="Yes" ? 'Retake' : 'Submit'} onTap={onTapped}  button_state='true' load={'100%'} page={8}></Footer>
      </div>
     );
}
 
export default QuestionPage7;


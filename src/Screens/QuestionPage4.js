import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sector from '../Components/Sector';
import Dropdown from '../Components/Dropdown';
import Radio from '../Components/Radio';
import Numbers from '../Components/Numbers';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGlobalState } from '../Networks/QuestionState';

const QuestionPage4 = () => {
  const [sample] = useGlobalState('sample');
  // console.log('sample 4 :>> ', sample);

  let location = useLocation();

  let [ans15, setAns15] = useState('');
  let [ans16, setAns16] = useState('');
  let [ans17, setAns17] = useState('');
  let [ans18, setAns18] = useState('');
  let [ans19, setAns19] = useState('');
  let [ans20, setAns20]= useState('');
  let [ans21, setAns21]= useState('');
  
  // let Page4Answers = {
  //   ans15,ans16,ans17,ans18,ans19,ans20,ans21
  // }
  // console.log('QuestionPage 4',Page4Answers)
  // console.log('GcsiPageAnswers',location.state.GcsiPageAnswers)
                      
  // Error states for each question: false - no error and true - error present
  let [error15, setError15] = useState(false);
  let [error16, setError16] = useState(false);
  let [error17, setError17] = useState(false);
  let [error18, setError18] = useState(false);
  let [error19, setError19] = useState(false);
  let [error20, setError20] = useState(false);
  let [error21, setError21] = useState(false);

  const data= sample
  let question
  question = data.map((data)=> { 
    let sector_name = 'BANK';
    let selected_company = 'ABSA BANK';
    // let sector = 2;  //SECTOR FROM SESSION FROM PREVIOUS PAGE'ANSWER
    let id = data.id;

    if(id>=15 && id<=21){
      let question = data.question
      let answers = data.answers
      if(id===15){
        return <Radio 
                    onValueChange = {setAns15} 
                    errorState = {error15}
                    question={question} 
                    answers={answers} 
                    sameName={id}
                    sector={sector_name} key={id}>
                </Radio>
      }
      else if(id===16){
        return  <Numbers 
                    onValueChange = {setAns16} 
                    errorState = {error16}
                    sector={sector_name} 
                    question={question} 
                    answers={answers} key={id}>
                </Numbers>
      }
      else if(id===17){
        return <Radio 
                    onValueChange = {setAns17} 
                    errorState = {error17}
                    question={question} 
                    answers={answers} 
                    sameName={id}
                    sector={sector_name} key={id}>
                </Radio>
      }
      else if(id===18){
        return <Radio 
                    onValueChange = {setAns18} 
                    errorState = {error18}
                    question={question} 
                    answers={answers} 
                    sameName={id}
                    sector={sector_name} key={id}>
                </Radio>
      }
      else if(id===19){
        return <Radio 
                    onValueChange = {setAns19} 
                    errorState = {error19}
                    question={question} 
                    answers={answers} 
                    sameName={id}
                    sector={sector_name} key={id}>
                </Radio>
      }
      else if(id===20){
        return <Radio 
                    onValueChange = {setAns20} 
                    errorState = {error20}
                    question={question} 
                    answers={answers} 
                    sameName={id}
                    sector={sector_name} key={id}>
                </Radio>
      }
      else if(id===21){
        return <Dropdown 
                    onValueChange = {setAns21} 
                    errorState = {error21}
                    selected_company={selected_company} 
                    question={question} 
                    answers={answers} key={id}>
                </Dropdown>
      }
    }else{
      // console.log('data else:>> NAN');
      return null;
    }
    return null;
  });

  const navigate = useNavigate();
  // error handling click event
  const onTapped = ()=>{
    let v15 = ans15 === '' ? true: false
    let v16 = ans16 === '' ? true: false
    let v17 = ans17 === '' ? true: false 
    let v18 = ans18 === '' ? true: false
    let v19 = ans19 === '' ? true: false
    let v20 = ans20 === '' ? true: false 
    let v21 = ans21 === '' ? true: false 
  

    console.log('v15 , v16 , v17 , v18 , v19 ,v20, v21:>> ', v15 , v16 , v17 , v18 , v19 ,v20, v21);
    if(v15 || v16 || v17 || v18 || v19 || v20 || v21 ){
      
      setError15(v15)
      setError16(v16) 
      setError17(v17)
      setError18(v18)
      setError19(v19)
      setError20(v20)
      setError21(v21)
    }else{
      let GcsiPageAnswers = {...location.state.GcsiPageAnswers, 
                              q15: ans15.value,
                              q16: ans16.value,
                              q17: ans17.value,
                              q18: ans18.value,
                              q19: ans19.value,
                              q20: ans20.value,
                              q21: ans21.value 
                            }
      console.log('4. GcsiPageAnswers',GcsiPageAnswers) 
      navigate(`${process.env.PUBLIC_URL}/question5`, {state:{GcsiPageAnswers}})
    }
  }

  const sector_title = "DEMOGRAPHICS"
    return ( 
        <div className="main-body">
        <Header key={'header'}></Header>
        <Sector sector_title={sector_title} key={'sector'}></Sector>
        {question}
        
        
        <Footer key={'footer'} title={'Next'} onTap={onTapped} button_state='true' load={'60%'} page={5}></Footer>
      </div>
     );
}
 
export default QuestionPage4;


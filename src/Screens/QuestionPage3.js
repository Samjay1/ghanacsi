import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sector from '../Components/Sector';
import CustomCheckbox from '../Components/CustomeCheckbox';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGlobalState } from '../Networks/QuestionState';

const QuestionPage3 = () => {
  const [sample] = useGlobalState('sample');
  console.log('sample 3 :>> ', sample);

  let location = useLocation();
  // Error states for each question: false - no error and true - error present
  let [error14, setError14] = useState(false);
  let [ans14, setAns14] = useState([]);

  let Page2Answers = {
    ans14
  }
  
  console.log('Question Page3',Page2Answers)
  // console.log('GcsiPageAnswers',location.state.GcsiPageAnswers)
  let prevChoice = location.state.GcsiPageAnswers.q13 === 'Digital Channels' ? 'DIGITAL' : location.state.GcsiPageAnswers.q13 === 'Traditional Channels' ? 'TRADITIONAL' : 'BOTH'
  let selected_company = location.state.GcsiPageAnswers.q4 || 'ABSA BANK';

  const data= sample
  let question
  question = data.map((data)=> {
    //SECTOR FROM SESSION FROM PREVIOUS PAGE'ANSWER
    let id = data.id;

    if(id===14){
      let question = data.question
      let answers = data.answers
      console.log('answer :>> ', answers);
      let new_answers = answers.filter((item)=> item.choice === prevChoice)

          return <CustomCheckbox 
                    onValueChange = {setAns14} 
                    errorState = {error14}
                    sector={null} 
                    question={question} 
                    selected_company ={selected_company}
                    answers={new_answers} key={id}>
                </CustomCheckbox>
     
    }else{
      // console.log('data else:>> NAN');
      return null;
    }
  });



  const navigate = useNavigate();
  // error handling click event
  const onTapped = ()=>{
    console.log('ans14 :>> ', ans14.value);
    let q14 = ans14.value.map((ans)=> ans.value)
    if(ans14.length !== 0 ? true: false){
      let GcsiPageAnswers = {...location.state.GcsiPageAnswers, q14}
      navigate(`${process.env.PUBLIC_URL}/question4`, {state:{GcsiPageAnswers}})
    }else{
      setError14(true)
    }
  }

  const sector_title = location.state.GcsiPageAnswers.q13
  const sector_description = 'Digital channel(s) of interaction with selected company'
  
    return ( 
        <div className="main-body">
        <Header key={'header'}></Header>
        <Sector sector_description={sector_description} sector_title={sector_title.toUpperCase()} key={'sector'}></Sector>
        {question}
        
        
        <Footer key={'footer'} title={'Next'} onTap={onTapped}  button_state='true' load={'48%'} page={4}></Footer>
      </div>
     );
}
 
export default QuestionPage3;


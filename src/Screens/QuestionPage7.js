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
 let sector_list =  { "Banking": 1, "Utilities": 2, "Telecommunications": 3, "Hospitality": 4,
                      "Healthcare": 5,"Retail Malls": 6, "Public Institutions": 7, "Online Businesses": 8,
                      "Transportation": 9,  "Insurance": 10, "Petroleum": 11
                    }


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
      
      let q3 = ''
      GcsiPageAnswers.q3.forEach((item)=> {
        q3 += item +',' 
      })
      let q11 = ''
      GcsiPageAnswers.q11.forEach((item)=> {
        q11 += item +',' 
      })
      let q14 = ''
      GcsiPageAnswers.q14.forEach((item)=> {
        q14 += item +',' 
      })
      // ORGANISE DATA FOR POSTING
      let data = {
        "sector": parseInt(sector_list[GcsiPageAnswers.q1]),
        "satisfaction": parseInt(GcsiPageAnswers.q2),
        "list_of_organizations": q3,
        "most_often": GcsiPageAnswers.q4,
        "eos_trust": parseInt(GcsiPageAnswers.q5[0]),
        "eos_look_and_feel": parseInt(GcsiPageAnswers.q5[1]),
        "eos_competence": parseInt(GcsiPageAnswers.q5[2]),
        "eos_professionalism": parseInt(GcsiPageAnswers.q5[3]),
        "eos_ease_of_doing_business": parseInt(GcsiPageAnswers.q5[4]),
        "eos_processes_and_procedures": parseInt(GcsiPageAnswers.q5[5]),
        "eos_customer_focused_innovations": parseInt(GcsiPageAnswers.q5[6]),
        "eos_engagement_with_customers": parseInt(GcsiPageAnswers.q5[7]),
        "eos_complaints_and_feedback": parseInt(GcsiPageAnswers.q5[8]),
        "eos_coronavirus_preparedness": parseInt(GcsiPageAnswers.q5[9]),
        "ooi_trust": parseInt(GcsiPageAnswers.q6[0]),
        "ooi_look_and_feel": parseInt(GcsiPageAnswers.q6[1]),
        "ooi_competence": parseInt(GcsiPageAnswers.q6[2]),
        "ooi_professionalism": parseInt(GcsiPageAnswers.q6[3]),
        "ooi_ease_of_doing_business": parseInt(GcsiPageAnswers.q6[4]),
        "ooi_processes_and_procedures": parseInt(GcsiPageAnswers.q6[5]),
        "ooi_customer_focused_innovations": parseInt(GcsiPageAnswers.q6[6]),
        "ooi_engagement_with_customers": parseInt(GcsiPageAnswers.q6[7]),
        "ooi_complaints_and_feedback": parseInt(GcsiPageAnswers.q6[8]),
        "ooi_coronavirus_preparedness": parseInt(GcsiPageAnswers.q6[9]),
        "impressions_on_cs": GcsiPageAnswers.q7,
        "preference_of_service": parseInt(GcsiPageAnswers.q8),
        "satisfied_dissatisfied": parseInt(GcsiPageAnswers.q9),
        "likely_to_recommend": parseInt(GcsiPageAnswers.q10),
        "means_of_interaction": GcsiPageAnswers.q13,
        "channels_of_interaction": q14,
        "gender": GcsiPageAnswers.q15,
        "exact_age": parseInt(GcsiPageAnswers.q16),
        "age": GcsiPageAnswers.q17,
        "region": GcsiPageAnswers.q18,
        "highestedu": GcsiPageAnswers.q19,
        "income": GcsiPageAnswers.q20,
        "nationality": GcsiPageAnswers.q21,
        "awareness_of_survey": GcsiPageAnswers.q22,
        "referral": GcsiPageAnswers.q23,
        "covid_focus": q11,
        "covid_feel": GcsiPageAnswers.q12
    }
    console.log('data to post :>> ', data);
      if(ans24.value ==="No"){
        // console.log('POSTING DATA TO SERVER:',GcsiPageAnswers)
        console.log('POSTING DATA TO SERVER: ', data);
        postRequest(data, '/final')

      }else{
        // console.log('POSTING DATA TO SERVER:',GcsiPageAnswers)
        // console.log(' OPT TO RETAKE:')
        postRequest(data, '/')
      }
    }else{
      setError24(true)
    }
  }

  const postRequest = (data, route)=>{
    console.log('POSTING DATA TO SERVER: 22', data);
    let url = 'https://api.ghanacsi.org/response/'
    // let url = 'https://gcsi-survey-api.herokuapp.com/response/'
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  };
  fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('API POST',data)
        console.log('data.age[0]  :>> ', data.age[0] );
        if(data.age[0] ===  "This field is required."){
          console.log('went wrong')
          navigate('/message')
        }else{
           navigate(route)
        }
      }).catch((error)=>{
        console.log('Error Api:>> ', error);
        navigate('/message')
        
      });
  }

  const sector_description = `Select YES to take survey for another sector, or NO to complete demographics section and EXIT survey.`
  const sector_title = 'RATE ANOTHER SECTOR?'
    return ( 
        <div className="main-body">
        <Header key={'header'}></Header>
        <Sector sector_description={sector_description} sector_title={sector_title} key={'sector'}></Sector>
        {question}
        
        
        <Footer key={'footer'} title={ans24.value==="Yes" ? 'Another Survey' : 'Submit'} onTap={onTapped}  button_state='true' load={'100%'} page={8}></Footer>
      </div>
     );
}
 
export default QuestionPage7;


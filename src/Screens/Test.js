import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sector from '../Components/Sector';
import RadioInline from '../Components/RadioInline';
import Checkbox from '../Components/Checkbox';
import CustomCheckbox from '../Components/CustomeCheckbox';
import MultiRadio from '../Components/MultiRadio';
import Dropdown from '../Components/Dropdown';
import Radio from '../Components/Radio';
import Text from '../Components/Text';
import MultiDropdown from '../Components/MultiDropdown';
import sample from '../Networks/sample';
import React, { Component} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Test (){
  const navigator = useNavigate();
  const location = useLocation();

  return <NavigationRoute navigation={navigator} sector_id={location.state.sector_id} sector_name={location.state.sector_name} ></NavigationRoute>
}

class  NavigationRoute extends Component {
  

  constructor(){
    super();
    

    this.state = {
      data: sample,
      error2: true,
      error3: false,
      error4: false,
      error5: false,
      error6: false,
      error7: false,
      error8: false,
      error9: false,
      error10: null,
      error11: null,
      error12: false,
      error13: null,
      ans2: '', ans3: [], ans4: '', ans5: '', ans6: '', ans7: '', ans8: '', ans9: '', ans10: '', ans11: [], ans12: '', ans13: ''
    }
    this.onTapped = this.onTapped.bind(this);
    this.defaultOnTapped = this.defaultOnTapped.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

   // error handling click event
    defaultOnTapped = (obj)=>{
            console.log('obj', obj);
      if(obj.name ==="Question2"){
        this.setState({
          ans2 : obj.value,
          error2: obj.value !== '' ? false : true
        })
         // console.log('Question2 ans', this.state.error3, this.state.ans2);
      }
      else if(obj.name ==="Question3"){
        this.setState({
          ans3 : obj.value,
          error3: obj.value !== '' ? false : true
        })
         // console.log('Question2 ans', this.state.error3, this.state.ans2);
      }
      else if(obj.name ==="Question4"){
        this.setState({
          ans4 : obj.value,
          error4: obj.value !== '' ? false : true
        })
         // console.log('Question2 ans', this.state.error3, this.state.ans2);
      }
      else if(obj.name ==="Question5"){
        let answerList = obj.value
        let checkedAnswers = answerList.filter((item)=> item.name !=null)
        this.setState({
          ans5 : obj.value,
          error5: answerList.length === checkedAnswers.length ? false : true
        })
      }
      else if(obj.name ==="Question6"){
        let answerList = obj.value
        let checkedAnswers = answerList.filter((item)=> item.name !=null)
        this.setState({
          ans6 : obj.value,
          error6 :  answerList.length === checkedAnswers.length ? false : true
        })
      }
        else if(obj.name ==="Question7"){
          let err = obj.value !== '' ? false : true;
          this.setState({
            ans7 : obj.value,
            erro7: err
          })
        }
        else if(obj.name ==="Question8"){
          this.setState({
            ans8 : obj.value,
            error8: obj.value !== '' ? false : true
          })
           // console.log('Question2 ans', this.state.error3, this.state.ans2);
        }
        else if(obj.name ==="Question9"){
          this.setState({
            ans9 : obj.value,
            error9: obj.value !== '' ? false : true
          })
           // console.log('Question2 ans', this.state.error3, this.state.ans2);
        }
        else if(obj.name ==="Question10"){
          this.setState({
            ans10 : obj.value,
            error10: obj.value !== '' ? false : true
          })
           // console.log('Question2 ans', this.state.error3, this.state.ans2);
        }
        else if(obj.name ==="Question12"){
          this.setState({
            ans12 : obj.value,
            error12: obj.value !== '' ? false : true
          })
           // console.log('Question2 ans', this.state.error3, this.state.ans2);
        }
        else if(obj.name ==="Question13"){
          this.setState({
            ans13 : obj.value,
            error13: obj.value !== '' ? false : true
          })
           // console.log('Question2 ans', this.state.error3, this.state.ans2);
        }
         // console.log('Question2 ans', this.state.error3, this.state.ans2);
      }
  

  onTapped = (obj)=>{
    if(obj.name === "Question3"){
      this.setState({
        ans3 : obj.value,
        error3: obj.value.length !== 0 ? false : true
      })
      //  console.log('Question3 ans', this.state.error3);
    }
    else if(obj.name === "Question11"){
      console.log('Question11 ans', obj.value);
      this.setState({
        ans11 : obj.value,
        error11: obj.value.length !== 0 ? false : true
      })
      // console.log('Question11 ans', this.state.error11);
    }
  }

  onSubmit = ()=>{
    // console.log('SUBMIT::GENERAL  DATA --------------------------------------');
    // console.log('ans2,ans3,ans4,ans5,ans6,ans7,ans8,ans9,ans10,ans11,ans12,ans13 :>> ', [this.state.ans2,this.state.ans3,this.state.ans4,this.state.ans5,this.state.ans6,this.state.ans7,this.state.ans8,this.state.ans9,this.state.ans10,this.state.ans11,this.state.ans12,this.state.ans13]);
    // console.log('ERRORS  :>> ', this.state.error2, this.state.error3 , this.state.error4 , this.state.error5 , this.state.error6 , this.state.error7 ,  this.state.error8 ,this.state.error9 , this.state.error10, this.state.error11,this.state.error12 ,  this.state.error13 );
    // console.log('v2 ', v2);
    let answerList = this.state.ans5 || new Array(10)
    let checkedAnswers = answerList.filter((item)=> item.name !=null)

    let answerList6 = this.state.ans6 || new Array(10)
    let checkedAnswers6 = answerList.filter((item)=> item.name !=null)

    this.setState({
      error2: this.state.ans2.length !== 0 ? false : true,
      error3: this.state.ans3.length !== 0 ? false : true,
      error4: this.state.ans4.length !== 0 ? false : true,
      error5: answerList.length === checkedAnswers.length ? false : true,
      error6: answerList6.length === checkedAnswers6.length ? false : true,
      error7: this.state.ans7 !== '' ? false : true,
      error8: this.state.ans8.length !== 0 ? false : true,
      error9: this.state.ans9.length !== 0 ? false : true,
      error10: this.state.ans10.length !== 0 ? false : true,
      error11: this.state.ans11.length !== 0 ? false : true,
      error12: this.state.ans12.length !== 0 ? false : true,
      error13: this.state.ans13.length !== 0 ? false : true

    })

    if(this.state.error2 || this.state.error3 || this.state.error4 || this.state.error5 || this.state.error6 || this.state.error7 ||  this.state.error8 || this.state.error9 || this.state.error10 || this.state.error11 || this.state.error12 ||  this.state.error13){
      // console.log('SUBMIT::ERROR FOUND XXX');
      // console.log('ERRORS  :>> ', this.state.error2, this.state.error3 , this.state.error4 , this.state.error5 , this.state.error6 , this.state.error7 ,  this.state.error8 ,this.state.error9 , this.state.error10, this.state.error11,this.state.error12 ,  this.state.error13 );
      let answerList = this.state.ans5 || new Array(10)
      let checkedAnswers = answerList.filter((item)=> item.name !=null)
      // console.log('answerList, checkedAnswers :>> ', answerList, checkedAnswers);
      let answerList6 = this.state.ans6 || new Array(10)
      let checkedAnswers6 = answerList6.filter((item)=> item.name !=null)

      // console.log('answerList6, checkedAnswers6 :>> ', answerList6, checkedAnswers6);
      this.setState({
        error2: this.state.ans2.length !== 0 ? false : true,
        error3: this.state.ans3.length !== 0 ? false : true,
        error4: this.state.ans4.length !== 0 ? false : true,
        error5: answerList.length === checkedAnswers.length ? false : true,
        error6: answerList6.length === checkedAnswers6.length ? false : true,
        error7: this.state.ans7 !== '' ? false : true,
        error8: this.state.ans8.length !== 0 ? false : true,
        error9: this.state.ans9.length !== 0 ? false : true,
        error10: this.state.ans10.length !== 0 ? false : true,
        error11: this.state.ans11.length !== 0 ? false : true,
        error12: this.state.ans12.length !== 0 ? false : true,
        error13: this.state.ans13.length !== 0 ? false : true
  
      })
    } else{
      // console.log('SUBMIT::NO ERROR');
      // console.log('ERRORS  :>> ', this.state.error2, this.state.error3 , this.state.error4 , this.state.error5 , this.state.error6 , this.state.error7 ,  this.state.error8 ,this.state.error9 , this.state.error10, this.state.error11,this.state.error12 ,  this.state.error13 );
      // console.log('this.state.ans6.length  :>> ', this.state.ans6.length );

      let answerList = this.state.ans5 || new Array(10)
      let checkedAnswers = answerList.filter((item)=> item.name !=null)

      let answerList6 = this.state.ans6 || new Array(10)
      let checkedAnswers6 = answerList6.filter((item)=> item.name !=null)
      this.setState({
      error2: this.state.ans2.length !== 0 ? false : true,
      error3: this.state.ans3.length !== 0 ? false : true,
      error4: this.state.ans4.length !== 0 ? false : true,
      error5: answerList.length === checkedAnswers.length ? false : true,
      error6: answerList6.length === checkedAnswers6.length ? false : true,
      error7: this.state.ans7 !== '' ? false : true,
      error8: this.state.ans8.length !== 0 ? false : true,
      error9: this.state.ans9.length !== 0 ? false : true,
      error10: this.state.ans10.length !== 0 ? false : true,
      error11: this.state.ans11.length !== 0 ? false : true,
      error12: this.state.ans12.length !== 0 ? false : true,
      error13: this.state.ans13.length !== 0 ? false : true

    })

    // SEND ANSWERS TO THE NEXT PAGE
      console.log('1. GcsiPageAnswers',this.props.sector_name)
      
      let GcsiPageAnswers = {
                            q1:this.props.sector_name,
                            q2:this.state.ans2, 
                            q3:this.state.ans3.map((item)=> item.value),
                            q4:this.state.ans4,
                            q5:this.state.ans5.map((item)=> item.value),
                            q6:this.state.ans6.map((item)=> item.value),
                            q7:this.state.ans7,
                            q8:this.state.ans8,
                            q9:this.state.ans9,
                            q10:this.state.ans10,
                            q11:this.state.ans11.map((item)=> item.value),
                            q12:this.state.ans12,
                            q13:this.state.ans13
                            }
      this.props.navigation('/question3', {state:{GcsiPageAnswers}})
    }
  }
  

  

  render(){

    let sector_name = this.props.sector_name||'My sector BANK';
    let sector_id = this.props.sector_id || 1;
     
    let question
    // console.log('this.state.date :>> ', this.state.data,"sector info", this.props.sector_id, this.props.sector_name);
    question = this.state.data.map((data)=> { 
      
      // let selected_company = 'ABSA BANK';
      // let sector = this.state.sector_id;  //SECTOR FROM SESSION FROM PREVIOUS PAGE'ANSWER
      let id = data.id;
  
     
      if(id>=2 && id<=13){
        let question = data.question
        let answers = data.answers
        let answer_title = data.answer_title ||'';
        if(id===2){
          return (
              <RadioInline
                    onValueChange = {this.defaultOnTapped}
                    errorState = {this.state.error2}
                    selected_company={this.state.company_name}
                    sector={sector_name}
                    question={question} 
                    questionName = {'Question2'}
                    answers={answers} 
                    begin={answer_title.begin}
                    end={answer_title.end}
                    sameName={id} key={2}>
              </RadioInline>
              );
          
        }
        else if(id===3){
          let new_answers = answers.filter((answerOne)=> answerOne.sector_id === sector_id)
          // console.log('new_answers :>> ', new_answers);
            return <CustomCheckbox 
                      onValueChange = {this.onTapped} 
                      errorState = {this.state.error3}
                      sector={sector_name} 
                      question={question} 
                      questionName = {'Question3'}
                      answers={new_answers} key={3}>
                  </CustomCheckbox>
        }
        else if(id===4){

          return <Radio 
                      onValueChange = {this.defaultOnTapped} 
                      errorState = {this.state.error4}
                      question={question} 
                      questionName = {'Question4'}
                      answers={this.state.ans3} 
                      sameName={id}
                      sector={sector_name} key={4}>
                  </Radio>
        }
        else if(id===5){
          return  <MultiRadio 
                      onValueChange = {this.defaultOnTapped} 
                      errorState = {this.state.error5}
                      selected_company={this.state.ans4}
                      question={question}  
                      questionName = {'Question5'}
                      answers={answers} 
                      begin={answer_title.begin}
                      end={answer_title.end} key={5}>
                  </MultiRadio>
        }
        else if(id===6){
          return  <MultiDropdown 
                      onValueChange = {this.defaultOnTapped} 
                      errorState = {this.state.error6}
                      data={[1,2,3,4,5]} 
                      selected_company={this.state.ans4} 
                      question={question} 
                      questionName = {'Question6'}
                      answers={answers} key={6}>
                  </MultiDropdown>
        }
        else if(id===7){
          return  <Text 
                      onValueChange = {this.defaultOnTapped} 
                      errorState = {this.state.error7}
                      sector={sector_name} 
                      question={question} 
                      questionName = {'Question7'}
                      answers={this.state.ans7} key={7}>
                  </Text>
        }
        else if(id===8){
          return (
              <RadioInline
                    onValueChange = {this.defaultOnTapped}
                    errorState = {this.state.error8}
                    selected_company={this.state.ans4}
                    sector={sector_name}
                    question={question} 
                    questionName = {'Question8'}
                    answers={answers} 
                    begin={answer_title.begin}
                    end={answer_title.end}
                    sameName={id} key={8}>
              </RadioInline>
              );
        }
        else if(id===9){
          return (
              <RadioInline
                    onValueChange = {this.defaultOnTapped}
                    errorState = {this.state.error9}
                    selected_company={this.state.ans4}
                    sector={sector_name}
                    question={question} 
                    questionName = {'Question9'}
                    answers={answers} 
                    begin={answer_title.begin}
                    end={answer_title.end}
                    sameName={id} key={9}>
              </RadioInline>
              );
        }
        else if(id===10){
          return (
              <RadioInline
                    onValueChange = {this.defaultOnTapped}
                    errorState = {this.state.error10}
                    selected_company={this.state.ans4}
                    sector={sector_name}
                    question={question} 
                    questionName = {'Question10'}
                    answers={answers} 
                    begin={answer_title.begin}
                    end={answer_title.end}
                    sameName={id} key={10}>
              </RadioInline>
              );
        }
        else if(id===11){
          return <Checkbox 
                      onValueChange = {this.onTapped} 
                      errorState = {this.state.error11}
                      sector={sector_name} 
                      question={question} 
                      questionName = {'Question11'}
                      answers={answers} key={11}>
                  </Checkbox>
        }
        else if(id===12){
          return <Radio 
                      onValueChange = {this.defaultOnTapped}
                      errorState = {this.state.error12} 
                      question={question} 
                      questionName = {'Question12'}
                      answers={answers} 
                      sameName={id}
                      sector={sector_name} key={12}>
                  </Radio>
        }
        else if(id===13){
          return <Dropdown 
                      onValueChange = {this.defaultOnTapped} 
                      errorState = {this.state.error13}
                      selected_company={this.state.ans4} 
                      question={question} 
                      questionName = {'Question13'}
                      answers={answers} key={13}>
                  </Dropdown>
        }
      }else{
        // console.log('data else:>> NAN');
        return null;
      }
      return null;
    });
  
  
  
  
    const sector_title = sector_name+' SECTOR'
    const sector_description = 'This section surveys banks licensed by the Bank of Nigeria'
      return ( 
          <div className="main-body">
          <Header key={'header'}></Header>
          <Sector sector_description={sector_description} sector_title={sector_title} key={'sector'} ></Sector>
          {question}
          
          
          <Footer key={'footer'} onTap={this.onSubmit}  button_state='true' load={'36%'} page={3}></Footer>
        </div>
       );
  }

  
}
 
export default Test;


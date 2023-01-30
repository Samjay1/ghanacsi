import { useState } from 'react';

const MultiDropdown = ({onValueChange,errorState,question,questionName,answers,data,selected_company})=>{
    let Question = question.replace('SELECTED_COMPANY',selected_company)

    let [mylist, setMylist] = useState(new Array(answers.length));
    let [OptionData] = useState(['1 Least important','2','3','4','5','6','7','8','9','10 Most important']);
    let [optionState, setOptionState] = useState([false,false,false,false,false,false,false,false,false,false]);
    let [selectOptionState, setSelectOptionState] = useState([false,false,false,false,false,false,false,false,false,false]);


    let handleOnChanged = (e, index)=>{
        let keyValueObj = {name: answers[index].answer, value: e.target.value}
        // console.log(keyValueObj)
        mylist[index] = keyValueObj
        onValueChange({name:e.target.name, value:mylist})

        optionState[OptionData.indexOf(e.target.value)] = true
        selectOptionState[index] = true
    } 

    const clearBtn = ()=>{
        setSelectOptionState([false,false,false,false,false,false,false,false,false,false]);
        setOptionState([false,false,false,false,false,false,false,false,false,false]);
        setMylist(new Array(answers.length));
        onValueChange({name:'question6', value:mylist}) 
    }

    const answerList = answers.map((answer,index)=> {
        let value = answer.answer;
           return (
            <div key={answer.id} className="answer-item d-flex justify-content-between bg-light p-2">
                <div className="d-flex align-items-center mr-2 w-25">
                    {value}
                </div>
                <div className="d-flex w-50">
                    <select disabled={selectOptionState[index]} name={questionName}  onChange={ (e)=>{handleOnChanged(e,index)} }  className="custom-select" id="inputGroupSelect01">
                        <option disabled selected={!selectOptionState[index]} >Choose...</option>
                        <option key={1}  onChange={(e)=>{onValueChange(e.target.value)} } disabled={optionState[0] && true} value={OptionData[0]}> {OptionData[0]}</option>
                        <option key={2}  onChange={(e)=>{onValueChange(e.target.value)} } disabled={ optionState[1] && true}  value={OptionData[1]}>{OptionData[1]}</option>
                        <option key={3}  onChange={(e)=>{onValueChange(e.target.value)} }  disabled={optionState[2] && true}  value={OptionData[2]}>{OptionData[2]}</option>
                        <option key={4}  onChange={(e)=>{onValueChange(e.target.value)} }  disabled={optionState[3] && true} value={OptionData[3]}> {OptionData[3]}</option>
                        <option key={5}  onChange={(e)=>{onValueChange(e.target.value)} }  disabled={optionState[4] && true} value={OptionData[4]}> {OptionData[4]}</option>
                        <option key={6}  onChange={(e)=>{onValueChange(e.target.value)} }  disabled={optionState[5] && true} value={OptionData[5]}> {OptionData[5]}</option>
                        <option key={7}  onChange={(e)=>{onValueChange(e.target.value)} }  disabled={optionState[6] && true} value={OptionData[6]}> {OptionData[6]}</option>
                        <option key={8}  onChange={(e)=>{onValueChange(e.target.value)} }  disabled={optionState[7] && true} value={OptionData[7]}> {OptionData[7]}</option>
                        <option key={9}  onChange={(e)=>{onValueChange(e.target.value)} }  disabled={optionState[8] && true} value={OptionData[8]}> {OptionData[8]}</option>
                        <option key={10}  onChange={(e)=>{onValueChange(e.target.value)} } disabled={optionState[9] && true}  value={OptionData[9]}>{OptionData[9]}</option>
                    </select>
                </div>
        </div>
           )
    })

    return(
        <>
              {/* <!-- QUESTION-MULTI-RADIO-INLINE --> */}
              <div className="question-body p-4 mt-2" style={ errorState ? {border:"1px solid red"} : {borderLeft: "2px solid #007699"}} >
                <p>{Question} MULTIPLE RESPONSE <span className="text-danger">*</span></p>
                <div className="answers"> 
                   {answerList} 
                </div>
                <p> <span className='float-right mr-2 primary-btn btn' onClick={clearBtn}>Clear choice</span> </p>
            </div>
            {errorState && <div className="border bg-white pl-4 border-danger rounded p-1 mt-1 animate__animated animate__bounce"> <span className="icon  mr-1">!</span>
           <span className="text-danger font-weight-bold">This is a required question</span>
       </div>}
            {/* <!-- QUESTION-MULTI-RADIO-INLINE --> */}
        </>
    );
}

export default MultiDropdown;
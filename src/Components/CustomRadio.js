import { useState } from "react";


const CustomRadio = ({onValueChange,errorState,question,questionName, answers, sameName,sector})=>{
    let Question = question.replace('SELECTED_COMPANIES',"selected " +sector)

    let [showCss, setShowCss] = useState('d-flex showDesign');
    let [custom_answers, setCustomAnswer] = useState([]);

    const answerList = answers.map((answer)=> {
        let value = answer.answer ||answer.value
           return (<div key={value} className="answer-item">
                    <label>
                        <input name={questionName || sameName} key={answer.id} onChange={(e)=>{onValueChange({name: e.target.name, id:answer.id, value: e.target.value})} } type="radio" value={value} className="mr-2 "/>
                        <span className="ml-2">{value}</span>
                    </label>
             </div>)
    })
    

     // console.log('custom_answers kdkd:>> ', custom_answers);
     const CustomAnswerList = custom_answers.length!==0 ? custom_answers.map((answer)=> {
        return (
            <div key={answer} className="answer-item">
                    <label>
                        <input name={questionName || sameName}  key={answer} onChange={(e)=>{onValueChange({name: e.target.name, id:answer.id, value: e.target.value})} } type="radio" value={answer} className="mr-2 "/>
                        <span className="ml-2">{answer}</span>
                    </label>
            </div>
            )

        }) : null;


         // SHOWS CUSTOM INPUT
    let [checkstate, setCheckState] = useState(true);
    const addinput = (e)=>{
        if(checkstate){
            setCheckState(false)
            console.log('addinput checked')
            setShowCss('d-flex ml-2');
        }else{
            setCheckState(true)
            console.log('addinput Unchecked')
            setShowCss('d-flex showDesign ml-2');
        }
    }


    // ADD CUSTOM CHECKBOX BY BUTTON
    
    const [textValue, setTextValue] = useState('');
    const addRadio = ()=>{
        if(textValue.length!==0){
            let currentAnswers = custom_answers;
            currentAnswers.push(textValue);
            setCustomAnswer(currentAnswers);
            setTextValue('');
            setCheckState(false)
            
        }

    }

    const textOnchange = (e)=>{
        setTextValue(e.target.value)
    }


    return(
        <>
             {/* <!-- QUESTION-RADIO --> */}
            <div className="question-body p-4 mt-2"  style={ errorState ? {border:"1px solid red"} : {border: "1px solid #d2d4d4"}} >
                <p>{Question} SINGLE RESPONSE <span className="text-danger">*</span> </p>
                <div className="answers">

                    {answerList}
                    
                     {/* Custom Radio */}
                     {CustomAnswerList}
                     {/* Add input */}
                    <div>
                            <div className="answer-item d-flex justify-content-start mr-2">
                                <label className="d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 icon-small text-success" fill="none" viewBox="0 0 24 24" stroke={!checkstate ? "#007699": "black"} strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                                    <span  
                                    style={!checkstate ? {color:"#007699", fontWeight: 'bold'}: {color:"black"}}
                                        onClick={ addinput } 
                                        className="mt-1 ml-2">Others</span>
                                </label>
                                
                                {/* input section */}
                                <div className={showCss}>
                                    <input onChange={textOnchange} type='text' className="form-control text-input rounded-0  border-0" value={textValue} />
                                <button onClick={addRadio} className='btn ml-1 rounded-0 primary-btn text-white'> Add</button>
                                </div>
                            </div>
                    </div>


                </div>
            </div>
            {errorState && <div className="border bg-white pl-4 border-danger rounded p-1 mt-1"> <span className="icon  mr-1">!</span>
           <span className="text-danger font-weight-bold">This is a required question</span>
       </div>}
            {/* <!-- QUESTION-RADIO --> */}
        </>
    );
}

export default CustomRadio;
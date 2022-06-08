
const RadioInline = ({onValueChange,errorState, selected_company, sector, question, questionName, answers,begin, end, sameName})=>{
    
    let new_question = question.replace('SECTOR',sector)
    let Question = new_question.replace('SELECTED_COMPANY',selected_company)

    // console.log('Question :>> ', Question);
    const answerList = answers.map((answer,index)=> {
        let value = answer.answer; 
        // console.log('answer_title :>> ',value);
           return (
                    <div key={index} className="d-flex flex-column">
                        <span>{value}</span>
                        <input onChange={(e)=>{onValueChange({name: e.target.name, value:e.target.value})} } type="radio" className="mr-2 " name={questionName || sameName } value={value}/>
                    </div>
           )
    })

    return (
       <>
         {/* // <!-- QUESTION-RADIO-INLINE --> */}
        <div className="question-body p-4 mt-2" style={ errorState ? {border:"1px solid red"} : {border: "1px solid #d2d4d4"}}>
           <p>{Question} SINGLE RESPONSE <span className="text-danger">*</span></p>
           <div className="answers">
               <div className="answer-item d-flex justify-content-between p-2">
                   <div className="d-flex align-items-center mr-2 small " style={{maxWidth: "130px"}}>
                       {begin}
                   </div>
                
                    {answerList}

                   <div className="d-flex align-items-center mr-2 small"  style={{maxWidth: "130px"}}>
                        {end}
                   </div>
               </div>
           </div>
       </div>
       {errorState && <div className="border bg-white pl-4 border-danger rounded p-1 mt-1 animate__animated animate__bounce"> <span className="icon  mr-1">!</span>
           <span className="text-danger font-weight-bold">This is a required question</span>
       </div>}
       {/* <!-- QUESTION-RADIO-INLINE --> */}
       </>
    );

}

export default RadioInline;
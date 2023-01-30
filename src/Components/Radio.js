const Radio = ({onValueChange,errorState,question,questionName,selected_companies,company_type, answers, sameName,sector})=>{
    let new_question = question.replace('COMPANY_TYPE', company_type)
    let new_question2 = new_question.replace('SECTOR',sector)
    let Question = new_question2.replace('SELECTED_COMPANIES',selected_companies)

    const answerList = answers.map((answer)=> {
        let value = answer.answer ||answer.value
           return (<div key={value} className="answer-item">
                    <label>
                        <input name={questionName || sameName} key={answer.id} onChange={(e)=>{onValueChange({name: e.target.name, id:answer.id, value: e.target.value})} } type="radio" value={value} className="mr-2 "/>
                        <span className="ml-2">{value}</span>
                    </label>
             </div>)
    })
    
    return(
        <>
             {/* <!-- QUESTION-RADIO --> */}
            <div className="question-body p-4 mt-2"  style={ errorState ? {border:"1px solid red"} : {borderLeft: "2px solid #007699"}} >
                <p>{Question} SINGLE RESPONSE <span className="text-danger">*</span> </p>
                <div className="answers">

                    {answerList}
                    
                </div>
            </div>
            {errorState && <div className="border bg-white pl-4 border-danger rounded p-1 mt-1"> <span className="icon  mr-1">!</span>
           <span className="text-danger font-weight-bold">This is a required question</span>
       </div>}
            {/* <!-- QUESTION-RADIO --> */}
        </>
    );
}

export default Radio;
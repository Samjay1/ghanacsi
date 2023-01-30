const Dropdown = ({defaultValue, onValueChange,errorState,selected_company,question,questionName, answers})=>{


    let Question = question.replace('SELECTED_COMPANY',selected_company)
    const answerList = answers.map((answer)=> {
        let value = answer.answer;
        // console.log('value, defaultValue :>> ', value, defaultValue);
           return <option  key={answer.id} value={value} selected={defaultValue===value?true:false}>{value}</option>
           
    })

    return(
        <>
             {/* <!-- QUESTION-OPTION --> */}
             <div className="question-body p-4 mt-2"  style={ errorState ? {border:"1px solid red"} : {borderLeft: "2px solid #007699"}} >
                <p>{Question} SINGLE RESPONSE <span className="text-danger">*</span></p>
                <div className="answers">
                    <div className="answer-item">
                        <select name={questionName} onChange={(e)=>{onValueChange({name: e.target.name, value:e.target.value})} } className="custom-select" id="inputGroupSelect01">
                            <option disabled selected value={'Choose'}>Choose...</option>
                            {answerList}
                        </select>
                    </div>
                </div>
            </div>
            {errorState && <div className="border bg-white pl-4 border-danger rounded p-1 mt-1 animate__animated animate__bounce"> <span className="icon  mr-1">!</span>
           <span className="text-danger font-weight-bold">This is a required question</span>
       </div>}
            {/* <!-- QUESTION-OPTION --> */}
        </>
    );
}

export default Dropdown;
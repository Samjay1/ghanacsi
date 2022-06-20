import { useState } from 'react';

const Checkbox = ({onValueChange,errorState,question,selected_company, answers,sector, questionName})=>{
    let value = question.replace('SECTOR_TITLE','all of the '+sector)
    let Question = value.replace('SECTOR',sector)
    // let Question = value.replace('ALL_THE_BANKS','all of the '+sector)
    let New_Question;
    selected_company !==null ? New_Question = Question.replace('SELECTED_COMPANY',selected_company) : New_Question= Question;

    let [mylist, setList] = useState([]);
    let handleOnChanged = (e)=>{
        if(e.target.checked){
            mylist.push({name: e.target.name, value: e.target.value})
            onValueChange({name:questionName, value:mylist})
            // console.log(e.target.value) 
        }else if(e.target.checked === false){ 
            let finalList = mylist.filter((item)=> item.value!==e.target.value) || mylist;
            setList(finalList)
            onValueChange({name:questionName, value:finalList}) 
            // console.log('222 remove from mylist',finalList)
        } 
    }

    const answerList = answers.map((answer)=> {
        let value = answer.answer;

           return (
                <div key={answer.id} className="answer-item">
                    <label>
                        <input 
                            name={questionName}
                            onChange={ handleOnChanged } 
                            value={value} 
                            type="checkbox" 
                            className="mr-2"/>

                        <span className="ml-2">{value}</span>
                    </label>
                </div>
           )
    })
    return(
        <>
              {/* <!-- QUESTION-CHECKBOX --> */}
             <div className="question-body p-4 mt-2"  style={ errorState ? {border:"1px solid red"} : {border: "1px solid #d2d4d4"}} >
                <p>{New_Question} MULTIPLE RESPONSE <span className="text-danger">*</span></p>
                <div className="answers">
                    {answerList}
                    
                </div>
            </div>
            {errorState && <div className="border bg-white pl-4 border-danger rounded p-1 mt-1 animate__animated animate__bounce"> <span className="icon  mr-1">!</span>
           <span className="text-danger font-weight-bold">This is a required question</span>
       </div>}
            {/* <!-- QUESTION-CHECKBOX --> */}
        </>
    )
}

export default Checkbox;
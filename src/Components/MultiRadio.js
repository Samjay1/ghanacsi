import { useState } from 'react';

const MultiRadio = ({onValueChange,errorState,question,questionName,answers,begin,end,selected_company})=>{
    let Question = question.replace('SELECTED_COMPANY',selected_company)

    let [mylist] = useState(new Array(answers.length));

    let handleOnChanged = (e, index)=>{
        let keyValueObj = {name: e.target.name, value: e.target.value}
        // console.log(keyValueObj)
        mylist[index] = keyValueObj
        onValueChange({name:questionName, value:mylist})
        // console.log(mylist)
    }

    const answerList = answers.map((answer,index)=> {
        let value = answer.answer;

        // console.log('answer_title :>> ',begin,end);
           return (
            <div key={answer.id} className="answer-item d-flex justify-content-between bg-light p-2" style={{minWidth: '300px', overflow:'scroll'}}>
            <div className="d-inline-flex align-items-center mr-2 w-25" style={{minWidth: '100px', overflow:'scroll'}}>
                {value}
            </div>
                <div className='d-flex justify-content-between w-75' style={{minWidth: '100px'}}>
                    <div className="d-flex flex-column"> 
                        <input type="radio"
                                onChange={(e)=>{handleOnChanged(e, index) }}
                                className="mr-2 " 
                                name={value} 
                                value='1' />
                    </div>
                    <div className="d-flex flex-column"> 
                        <input  onChange={(e)=>{handleOnChanged(e, index)}} 
                                type="radio" 
                                className="mr-2 " 
                                name={value} 
                                value='2'/>
                    </div>
                    <div className="d-flex flex-column"> 
                        <input onChange={(e)=>{handleOnChanged(e, index)}} 
                                type="radio" 
                                className="mr-2 " 
                                name={value} 
                                value='3'/>
                    </div>
                    <div className="d-flex flex-column"> 
                        <input onChange={(e)=>{handleOnChanged(e, index)}} 
                                type="radio" 
                                className="mr-2 " 
                                name={value} 
                                value='4'/>
                    </div>
                    <div className="d-flex flex-column"> 
                        <input onChange={(e)=>{handleOnChanged(e, index)}} 
                                type="radio" 
                                className="mr-2 " 
                                name={value} 
                                value='5'/>
                    </div>
                    <div className="d-flex flex-column"> 
                        <input onChange={(e)=>{handleOnChanged(e, index)}} 
                                type="radio" 
                                className="mr-2 " 
                                name={value} 
                                value='6'/>
                    </div>
                    <div className="d-flex flex-column"> 
                        <input onChange={(e)=>{handleOnChanged(e, index)}} 
                                type="radio" 
                                className="mr-2 " 
                                name={value} 
                                value='7'/>
                    </div>
                </div>
        </div>
           )
    })

    return(
        <>
              {/* <!-- QUESTION-MULTI-RADIO-INLINE --> */}
              <div className="question-body p-4 mt-2"  style={ errorState ? {border:"1px solid red"} : {borderLeft: "2px solid #007699"}} >
                <p>{Question} MULTIPLE RESPONSE <span className="text-danger">*</span></p>
                <div className="answers">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center m-0  w-25">
                        </div>
                        <div className="m-0 w-50">
                            {begin}
                        </div>
                        <div className=" mr-2 text-right w-50">
                            {end}
                        </div>
                    </div>
                    <div className="answer-item d-flex justify-content-between p-2" style={{minWidth: '250px'}}>
                        <div className="d-flex align-items-center   w-25">
                            
                        </div>
                        <div className='d-flex justify-content-between w-75' style={{minWidth: '100px'}}>
                            <div className="d-flex flex-column">
                                <span>1 </span>
                                
                            </div>
                            <div className="d-flex flex-column">
                                <span>2</span>
                            </div>
                            <div className="d-flex flex-column">
                                <span>3</span>
                            </div>
                            <div className="d-flex flex-column">
                                <span>4</span>
                            </div>
                            <div className="d-flex flex-column">
                                <span>5</span>
                            </div>
                            <div className="d-flex flex-column">
                                <span>6</span>
                            </div>
                            <div className="d-flex flex-column">
                                <span>7</span>
                            </div>
                        </div>

                    </div>
                  

                   {answerList}
 
                </div>
            </div>
            {errorState && <div className="border bg-white pl-4 border-danger rounded p-1 mt-1 animate__animated animate__bounce"> <span className="icon  mr-1">!</span>
           <span className="text-danger font-weight-bold">This is a required question</span>
       </div>}
            {/* <!-- QUESTION-MULTI-RADIO-INLINE --> */}
        </>
    );
}

export default MultiRadio;
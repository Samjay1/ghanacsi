import { useState } from "react";


const Numbers = ({onValueChange,errorState,question,questionName,sector})=>{
    let Question = question.replace('SECTOR',sector)

    let [value, setValue] = useState(0);
    let [myError, setMyerror] = useState(false)
    const onValueDiff= (e)=>{
        let myvalue = e.target.value;
        console.log('Testin :>> ', typeof parseInt(myvalue),myvalue,"outside value", value);

        if(parseInt(myvalue) >= 1){
            setValue(myvalue)
            setMyerror(false);
            onValueChange({name:e.target.name, value:e.target.value})
             console.log('-------------------numbers only :>> ', value);
        }else{
            onValueChange("")
            setMyerror(true);
            console.log('-------------------String only :>> ', value);
            setValue('')
        }

    }
    return(
        <>
             {/* <!-- QUESTION-TEXT-INPUT --> */}
            <div  key={1}  className="question-body p-4 mt-2"  style={!myError?  errorState ? {border:"1px solid red"} : {borderLeft: "2px solid #007699"} : {border:"1px solid red"} } >
                <p>{Question} SINGLE RESPONSE <span className="text-danger">*</span></p>
                <div className="answers">
                    <div className="answer-item">
                        <label >
                            <input name={questionName} onChange={onValueDiff} type={'number'} max={200} step={1} className="form-control border-0 text-input rounded-0" value={value} />
                        </label>
                    </div>
                </div>
            </div>
            {errorState && <div className="border bg-white pl-4 border-danger rounded p-1 mt-1 animate__animated animate__bounce"> <span className="icon  mr-1">!</span>
           <span className="text-danger font-weight-bold">This is a required question</span>
       </div>}
       {  myError && <div className="border bg-white pl-4 border-danger rounded p-1 mt-1 animate__animated animate__bounce"> <span className="icon  mr-1">!</span>
           <span className="text-danger font-weight-bold">Accepts only Numbers!</span>
       </div>}
            {/* <!-- QUESTION-TEXT-INPUT --> */}

        </>
    );
}

export default Numbers;

import { setGlobalState } from '../Networks/QuestionState';

let setData ;
const useFetch = ()=>{
    fetch('https://gcsi-survey-api.herokuapp.com')
    .then((response) => response.json())
    .then((json) => {
        setData=json
        setGlobalState('sample', json)
        console.log("API",setData)
        return setData;
    });
    return setData;
}

export default useFetch;
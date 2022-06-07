import sample from '../Networks/sample';
import { createGlobalState } from 'react-hooks-global-state'; 


const initialState = {sample};
const {setGlobalState, useGlobalState } = createGlobalState(initialState);

export {setGlobalState, useGlobalState};





import { createStore } from 'redux';
import ReducerCtr from '../reducers/reducerCtr';
export const store= createStore(ReducerCtr);
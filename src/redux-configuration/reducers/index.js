import {combineReducers} from '@reduxjs/toolkit';
import messageReducer from '../reducers/messageReducer';

const rootReducer = combineReducers({message: messageReducer});

export default rootReducer;

import { combineReducers } from 'redux'
import condition from './condition'
import ws from './ws'

const Reducer = combineReducers({
    condition,
    ws
});

export default Reducer;
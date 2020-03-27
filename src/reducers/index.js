import {combineReducers} from 'redux'

import converteReducer from './convert-reducer'

const rootReducer = combineReducers({
    conversor: converteReducer
})

export default rootReducer
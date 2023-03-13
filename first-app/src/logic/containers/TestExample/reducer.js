import * as types from "./types";
import createReducer from '../../utils/createReducer';

const INITIAL_STATE ={
    testExampleCount : 0,
}

export const testExampleReducer = createReducer(INITIAL_STATE, {
    [types.TEST_EXAMPLE_EVENT](state, action) {
        return Object.assign({}, state, {
            testExampleCount: state.testExampleCount + 1
        });
    }
})
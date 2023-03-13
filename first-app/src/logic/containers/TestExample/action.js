import * as types from "./types";



export function testExampleAction() {
    return dispatch => {
        dispatch({
            type: types.TEST_EXAMPLE_EVENT
        });
    };
}